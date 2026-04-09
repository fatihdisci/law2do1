'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Tag, ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/lib/blog';

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr));
}

function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-48 bg-muted overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
        unoptimized
      />
      {/* Fallback shown underneath via CSS */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 -z-0">
        <ImageOff size={40} />
      </div>
    </div>
  );
}

export default function BlogTagFilter({
  posts,
  tags,
}: {
  posts: BlogPost[];
  tags: string[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? posts.filter((p) => p.tags.includes(active))
    : posts;

  return (
    <>
      {/* Tag Filter */}
      {tags.length > 0 && (
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive(null)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm',
                active === null
                  ? 'bg-primary border-primary text-primary-foreground shadow-primary/25'
                  : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
              )}
            >
              Tümü
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(active === tag ? null : tag)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm',
                  active === tag
                    ? 'bg-primary border-primary text-primary-foreground shadow-primary/25'
                    : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Post Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-card/50 rounded-3xl border border-border/50">
          <p className="text-muted-foreground text-lg">
            Henüz blog yazısı eklenmedi.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="group bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Cover Image */}
              <CoverImage src={post.coverImage} alt={post.title} />

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20"
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(post.date)}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all duration-200"
                >
                  Devam Oku
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
