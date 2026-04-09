import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  img: (props) => {
    const { src, alt, ...rest } = props as { src: string; alt?: string; [key: string]: unknown };
    if (!src) return null;
    return (
      <span className="block my-8 relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt ?? ''}
          fill
          className="object-cover"
          unoptimized
          {...(rest as object)}
        />
      </span>
    );
  },
};
