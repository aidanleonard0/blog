import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'aidanleo.net',
  description:
    '',
  href: 'https://aidanleonard.vercel.app',
  author: 'Aidan Leonard',
  locale: 'en-UK',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '/blog',
  },
  {
    href: '/about_me',
    label: '/about_me',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/aidanleonard0',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/aidan-leonard-b81b0b236/',
    label: 'LinkedIn',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
