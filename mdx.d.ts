declare module '*.mdx' {
    export function SomeComponent(): JSX.Element;
    export const title: string;
    export const publishedAt: string;
    export const summary: string;
  }