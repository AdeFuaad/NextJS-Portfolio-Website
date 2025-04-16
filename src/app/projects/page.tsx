import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoClima from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoPortfolio from '@/images/logos/port.png'
import logoAse from '@/images/logos/ase_logo2.png'
import logoFuaad from '@/images/logos/fuaad.svg'
import logoEip from '@/images/logos/eip-pod.png'
import logoYyz from '@/images/logos/yyz-creates.png'
import logoAccess from '@/images/logos/access-analyzer.png'
import logoYoutoob from '@/images/logos/youtoob-mg.png'
import logoWelcome from '@/images/logos/welcome-canada.png'

const projects = [
  {
    name: 'YYZ Creates',
    description:
      'A dynamic platform showcasing Toronto-based creative professionals and their work, connecting local talent with opportunities in the creative industry.',
    link: { href: 'https://yyz-creates.com/', label: 'yyz-creates • Next' },
    logo: logoYyz,
  },
  {
    name: 'Welcome to Canada AI',
    description:
      'An AI-powered platform designed to assist newcomers to Canada, providing personalized guidance on immigration processes, settlement services, and cultural integration through interactive conversations.',
    link: { href: 'https://welcome-to-canada-ai.lovable.app/', label: 'welcome-to-canada • Next' },
    logo: logoWelcome,
  },
  {
    name: 'Access Analyzer',
    description:
      'A comprehensive web accessibility testing tool that helps developers and designers ensure their websites meet WCAG standards and are accessible to all users.',
    link: { href: 'https://accessanalyzer.info/', label: 'accessanalyzer • React' },
    logo: logoAccess,
  },
  {
    name: 'YouToob MG',
    description:
      'A powerful YouTube channel management dashboard that provides analytics, content scheduling, and audience engagement tools for content creators.',
    link: { href: 'https://youtoobmg.info/dashboard', label: 'youtoobmg • Next' },
    logo: logoYoutoob,
  },
  {
    name: 'Ase Community Foundation',
    description:
      'A verified A++ non-profit organization dedicated to supporting black Canadians with disabilities by providing comprehensive resources and assistance to foster inclusivity and empowerment.',
    link: { href: 'https://asecommunityfoundation.com/', label: 'asecommunityfoundation • Javascript' },
    logo: logoAse,
  },
  {
    name: 'AI Summarizer',
    description: 'A sophisticated AI-powered platform where users can succinctly summarize blogs and articles, facilitating efficient content consumption by presenting the key insights and highlights in a streamlined manner.',
    link: { href: 'https://snazzy-fudge-9b062f.netlify.app/', label: 'aisummarizer • React' },
    logo: logoPlanetaria,
  },
  {
    name: 'UAEHut',
    description: 'A streamlined platform for UAE residents to discover apartments for sale or rent, featuring comprehensive listings with vivid imagery.',
    link: { href: 'https://uae-huts.vercel.app/', label: 'uaehut • Next' },
    logo: logoHelioStream,
  },
  {
    name: 'Portfolio',
    description:
      "A curated showcase of projects illustrating technical expertise and innovative solutions in software development.",
    link: { href: '/', label: 'fuaad shobambi • Next' },
    logo: logoPortfolio,
  },
  {
    name: 'OpsHub',
    description: 'A streamlined data management solution offering secure CRUD operations, advanced search capabilities, robust user authentication, and role-based access control for optimized business operations.',
    link: { href: 'https://github.com/AdeFuaad/restaurant-management-system', label: 'OpsHub  •  Java' },
    logo: logoFuaad,
  },
  {
    name: 'LineLogic',
    description:
      'A website that allows users view the top youtube videos and github repositories to further improve their coding skills',
    link: { href: 'https://adefuaad.github.io/LineLogic/', label: 'linelogic • Javascript' },
    logo: logoOpenShuttle,
  },
  {
    name: 'MetaClima',
    description:
      'A global weather forecast tool providing 5-day city-specific predictions.',
    link: { href: 'https://adefuaad.github.io/weatherApp/', label: 'metaclima • Javascript' },
    logo: logoClima,
  },
  {
    name: 'EIP (Under Development)',
    description: 'An avant-garde podcast platform hosting a wide variety of insightful episodes. Join experts in Intellectual Property & Technology Law as they discuss the latest trends and developments.',
    link: { href: 'https://eip-podcast-x4au.vercel.app/', label: 'eip • Next' },
    logo: logoEip,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've made trying to put my dent in the universe.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I&apos;ve made trying to put my dent in the universe."
      intro={
        <>
          <p className="mb-4">
            Powered by high-performance hardware and cutting-edge tools:
          </p>
          <div className="mb-8 grid grid-cols-1 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <div>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Hardware: </span>
              MacBook Pro M1 Max • 64GB RAM • 2TB Storage
            </div>
            <div>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Core Technologies: </span>
              Next.js • TypeScript • React • Node.js • TailwindCSS
            </div>
            <div>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Databases & Backend: </span>
              Supabase • Firebase • MongoDB • PostgreSQL • MySQL
            </div>
            <div>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Accessibility & Testing: </span>
              NVDA • VoiceOver • Lighthouse • Jest • React Testing Library
            </div>
          </div>
          <p>
            I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
          </p>
        </>
      }
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                width={32}
                height={32}
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
