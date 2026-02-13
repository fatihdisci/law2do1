import xml.etree.ElementTree as ET
import json
import re

svg_path = 'turkey.svg'
output_tsx_path = 'src/components/TurkeyMap.tsx'

# Parse SVG
tree = ET.parse(svg_path)
root = tree.getroot()

def strip_ns(tag):
    if '}' in tag:
        return tag.split('}', 1)[1]
    return tag

# ViewBox
viewBox = root.get('viewBox')
if not viewBox:
    w = root.get('width', '800').replace('px', '')
    h = root.get('height', '400').replace('px', '')
    viewBox = f"0 0 {w} {h}"

# Extract province data and approximate centers from path d attribute
provinces = []
paths_jsx = ""

def approx_center(d_attr):
    """
    Calculate centroid by parsing SVG path commands, handling relative coordinates properly.
    """
    # Tokenize: command letters or numbers
    tokens = re.findall(r'([a-zA-Z])|([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)', d_attr)
    
    # Flatten and clean tokens
    commands = []
    for t in tokens:
        if t[0]: commands.append(t[0])
        else: commands.append(float(t[1]))
    
    vertices = []
    cx, cy = 0, 0  # current cursor
    
    # Helper to consume N numbers
    idx = 0
    current_command = 'M' # Assumed start
    
    while idx < len(commands):
        token = commands[idx]
        
        if isinstance(token, str):
            current_command = token
            idx += 1
            # Z/z doesn't take params
            if current_command.lower() == 'z':
                continue
        
        # Determine strictness of command
        cmd_lower = current_command.lower()
        is_relative = current_command == cmd_lower
        
        # M/m, L/l, T/t take 2 params (x, y)
        # H/h, V/v take 1 param
        # C/c takes 6 params
        # S/s, Q/q take 4 params
        # A/a takes 7 params
        
        params = []
        
        if cmd_lower in ['m', 'l', 't']:
            count = 2
        elif cmd_lower in ['h', 'v']:
            count = 1
        elif cmd_lower == 'c':
            count = 6
        elif cmd_lower in ['s', 'q']:
            count = 4
        elif cmd_lower == 'a':
            count = 7
        elif cmd_lower == 'z':
            continue
        else:
            # Unknown command, skip or break
            idx += 1
            continue
            
        # Consume params
        try:
            for _ in range(count):
                val = commands[idx]
                if isinstance(val, str): 
                    # Implicit command repeat or unexpected command
                    # SVG allows omitting command letter if same as previous (except M->L)
                    break 
                params.append(val)
                idx += 1
        except IndexError:
            break
            
        # Update state and recording vertices
        if len(params) == count:
            if cmd_lower == 'm':
                x, y = params[0], params[1]
                if is_relative and vertices: # First M is always absolute
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))
                
                # Subsequent pairs after m/M are treated as l/L
                # but we handle loop by implicit repeat check above? 
                # Actually, standard parser handles implicit repeats. 
                # For this simple center calc, we just need checking M/m vs others.
                
                # Crucial: after 'm', subsequent numbers are 'l'. 
                # We need to handle implicit repeats if we want robustness.
                # But typically regex approach is brittle for implicit repeats.
                # However, for finding the center, we mostly care about the first move and major lines.
                # Improving robustness: logic for implicit repeats is complex.
                # Let's trust that simple parsing of explicit commands + implicit L logic fixes most.
                
                # Fix for implicit repeat: if next token is number, repeat command.
                # Exception: M becomes L, m becomes l.
                if current_command == 'M': current_command = 'L'
                if current_command == 'm': current_command = 'l'

            elif cmd_lower == 'l':
                x, y = params[0], params[1]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))
            
            elif cmd_lower == 'h':
                x = params[0]
                if is_relative: cx += x
                else: cx = x
                vertices.append((cx, cy))
                
            elif cmd_lower == 'v':
                y = params[0]
                if is_relative: cy += y
                else: cy = y
                vertices.append((cx, cy))
            
            elif cmd_lower == 'c':
                # curves: (x1 y1 x2 y2 x y) - we only care about destination (x y) for bbox roughly
                x, y = params[4], params[5]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))
            
            elif cmd_lower == 's':
                x, y = params[2], params[3]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))

            elif cmd_lower == 'q':
                x, y = params[2], params[3]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))

            elif cmd_lower == 't':
                x, y = params[0], params[1]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))
                
            elif cmd_lower == 'a':
                # Elliptical arc: rx ry x-axis-rotation large-arc-flag sweep-flag x y
                x, y = params[5], params[6]
                if is_relative:
                    cx += x
                    cy += y
                else:
                    cx = x
                    cy = y
                vertices.append((cx, cy))

    if not vertices:
        return 400, 170

    xs = [v[0] for v in vertices]
    ys = [v[1] for v in vertices]
    
    return (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2

for elem in root.iter():
    tag = strip_ns(elem.tag)
    if tag == 'path':
        d = elem.get('d')
        p_id = elem.get('id')
        title = elem.get('title')
        if not title and p_id:
            title = p_id
        if d and p_id and title:
            cx, cy = approx_center(d)
            provinces.append({'id': p_id, 'name': title, 'cx': round(cx, 1), 'cy': round(cy, 1)})
            
            paths_jsx += f'''
              <path
                id="{p_id}"
                d="{d}"
                className={{cn(
                  "transition-all duration-300 cursor-pointer",
                  activeId === "{p_id}"
                    ? "fill-[rgba(6,182,212,0.35)] stroke-cyan-400 stroke-[1.5]"
                    : "fill-slate-800 stroke-slate-700 stroke-[0.5] hover:fill-slate-700 hover:stroke-slate-500"
                )}}
                style={{activeId === "{p_id}" ? {{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.5))" }} : undefined}}
                onMouseEnter={{() => setHovered("{title}")}}
                onMouseLeave={{() => setHovered(null)}}
              >
                <title>{title}</title>
              </path>'''

provinces_json = json.dumps(provinces, ensure_ascii=False, indent=2)

tsx = f'''"use client";

import React, {{ useState, useEffect, useCallback }} from "react";
import {{ cn }} from "@/lib/utils";

const PROVINCES: {{ id: string; name: string; cx: number; cy: number }}[] = {provinces_json};

const ACTIONS = [
  "Dava Dilekçesi Hazırlandı",
  "Duruşma Zaptı Analiz Edildi",
  "Tevzi Formu Oluşturuldu",
  "Tensip Zaptı İncelendi",
  "Bilirkişi Raporuna İtiraz Edildi",
  "İstinaf Dilekçesi Yüklendi",
  "İcra Emri Düzenlendi",
  "Haciz Talimatı Gönderildi",
  "Vekaletname Sisteme İşlendi",
  "Müvekkil Görüşme Notu Eklendi",
  "Arabuluculuk Son Tutanağı Eklendi",
  "Temyiz Başvurusu Yapıldı",
  "Gerekçeli Karar Sisteme Girildi",
  "Masraf Avansı Yatırıldı",
  "Harç Makbuzu Eklendi",
  "Tanık Listesi Oluşturuldu",
  "Delil Listesi Sunuldu",
  "Cevap Dilekçesi Hazırlandı"
];

interface ActiveEvent {{
  provinceId: string;
  provinceName: string;
  action: string;
  cx: number;
  cy: number;
}}

export function TurkeyMap() {{
  const [activeEvent, setActiveEvent] = useState<ActiveEvent | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const activeId = activeEvent?.provinceId ?? null;

  // Random activity
  const triggerActivity = useCallback(() => {{
    const p = PROVINCES[Math.floor(Math.random() * PROVINCES.length)];
    const a = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    setActiveEvent({{ provinceId: p.id, provinceName: p.name, action: a, cx: p.cx, cy: p.cy }});
    setShowTooltip(true);

    setTimeout(() => {{
      setShowTooltip(false);
      setTimeout(() => setActiveEvent(null), 400);
    }}, 2200);
  }}, []);

  useEffect(() => {{
    const first = setTimeout(triggerActivity, 600);
    const interval = setInterval(triggerActivity, 2800);
    return () => {{ clearTimeout(first); clearInterval(interval); }};
  }}, [triggerActivity]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {{/* Map Area */}}
      <div className="relative z-10 w-full px-4 sm:px-8 py-12 sm:py-20">
        <div className="relative w-full" style={{{{ aspectRatio: "792.6 / 334.6" }}}}> 

          {{/* SVG Map */}}
          <svg viewBox="{viewBox}" className="w-full h-full" style={{{{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}}}>
            {paths_jsx}
          </svg>

          {{/* Pulse Dot */}}
          {{activeEvent && (
            <div
              className="absolute pointer-events-none z-20"
              style={{{{
                left: `${{(activeEvent.cx / 792.6) * 100}}%`,
                top: `${{(activeEvent.cy / 334.6) * 100}}%`,
                transform: "translate(-50%, -50%)",
              }}}}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-cyan-400 animate-[ripple_1.5s_ease-out_infinite]" />
              </div>
            </div>
          )}}

          {{/* Tooltip */}}
          {{activeEvent && (
            <div
              className={{cn(
                "absolute pointer-events-none z-30 transition-all duration-400",
                showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}}
              style={{{{
                left: `${{(activeEvent.cx / 792.6) * 100}}%`,
                top: `${{(activeEvent.cy / 334.6) * 100}}%`,
                transform: "translate(-50%, calc(-100% - 24px))",
              }}}}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 border-l-[3px] border-l-cyan-400 rounded-lg px-4 py-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] min-w-[200px]">
                <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {{activeEvent.provinceName}}
                </span>
                <span className="block text-sm font-medium text-white">
                  {{activeEvent.action}}
                </span>
              </div>
              {{/* Tooltip Arrow */}}
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-slate-900/95 border-r border-b border-slate-700 rotate-45 -mt-1" />
              </div>
            </div>
          )}}
        </div>
      </div>

      {{/* Glow Effect */}}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
    </div>
  );
}}
'''

with open(output_tsx_path, 'w', encoding='utf-8') as f:
    f.write(tsx)

print(f"Enhanced TurkeyMap.tsx generated with {len(provinces)} provinces.")
