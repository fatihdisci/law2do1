import type { MDXComponents } from 'mdx/types';

const BASE_PATH = '/law2do1';

export const mdxComponents: MDXComponents = {
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src, alt }) => {
    if (!src) return null;
    const imgSrc = (src as string).startsWith('/') ? `${BASE_PATH}${src}` : src;
    return (
      <span className="block my-8 rounded-xl overflow-hidden border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc as string}
          alt={alt ?? ''}
          className="w-full h-auto object-cover"
        />
      </span>
    );
  },
};
