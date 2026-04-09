import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
const BASE_PATH = '/law2do1';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  published: boolean;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());

  const posts = dirs
    .map((dir) => {
      const slug = dir.name;
      const filePath = path.join(BLOG_DIR, slug, 'index.mdx');
      if (!fs.existsSync(filePath)) return null;

      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        author: data.author ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        coverImage: data.coverImage?.startsWith('http') ? data.coverImage : `${BASE_PATH}${data.coverImage ?? `/blog/${slug}/kapak.jpg`}`,
        published: data.published ?? false,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null && p.published);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, slug, 'index.mdx');
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage?.startsWith('http') ? data.coverImage : `${BASE_PATH}${data.coverImage ?? `/blog/${slug}/kapak.jpg`}`,
    published: data.published ?? false,
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b, 'tr'));
}
