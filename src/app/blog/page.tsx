import { BookOpen } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/blog';
import BlogTagFilter from '@/components/BlogTagFilter';

export const metadata = {
  title: 'Blog | Law2Do',
  description:
    'Hukuk teknolojisi, dava yönetimi ve avukatlık pratiği üzerine yazılar.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-primary-foreground mb-6 shadow-lg shadow-primary/25">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Hukuk teknolojisi, dava yönetimi ve avukatlık pratiği üzerine yazılar.
          </p>
        </div>

        {/* Tag filter + post grid (client component) */}
        <BlogTagFilter posts={posts} tags={tags} />
      </div>
    </div>
  );
}
