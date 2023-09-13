import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Fuaad Shobambi',
    default:
      'Fuaad Shobambi - Software developer and Tech Entrepreneur',
  },
  description:
    "I'm Fuaad Shobambi, a Toronto-based software designer and tech entrepreneur. I'm the founder of Torus, a company specializing in crafting websites for businesses. With a passion for innovation, I drive cutting-edge solutions that redefine industries. With a strong foundation in software design and development.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
