import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Heading } from '@radix-ui/themes';


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <Heading as='h2' color="bronze" highContrast className='block'>{children}</Heading>
    ),
    h3: ({ children }) => (
      <Heading as='h3' size="4" color="bronze" className='block'>{children}</Heading>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
