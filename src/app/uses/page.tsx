import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Toolset and Recommendations"
      intro="Often, I am approached by enthusiasts and fellow developers inquiring about the tools I use to engineer software solutions or enhance productivity. In this space, I am sharing an extensive list of all the resources I favor and rely on in my professional voyage."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro M1 Max">
            My primary development machine is the powerful MacBook Pro M1 Max with 64GB RAM and 2TB storage. This high-performance setup ensures smooth handling of multiple development environments, virtual machines, and resource-intensive applications simultaneously.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="Next.js">
            My primary framework for building modern web applications, providing powerful features like server-side rendering, API routes, and optimized performance out of the box.
          </Tool>
          <Tool title="TypeScript">
            Essential for type-safe development, catching errors early and providing enhanced IDE support and code maintainability.
          </Tool>
          <Tool title="React">
            My core frontend library for building user interfaces with a component-based architecture, enabling efficient development of interactive web applications.
          </Tool>
          <Tool title="Node.js">
            The backbone of my server-side development, perfect for building scalable network applications with its event-driven, non-blocking I/O model.
          </Tool>
          <Tool title="Supabase">
            My preferred backend-as-a-service platform for real-time applications, providing PostgreSQL databases, authentication, and auto-generated APIs.
          </Tool>
          <Tool title="Firebase">
            Used for projects requiring real-time updates, cloud functions, and scalable hosting with minimal backend configuration.
          </Tool>
          <Tool title="MongoDB">
            NoSQL database of choice for projects requiring flexible schema design and document-based data storage.
          </Tool>
          <Tool title="PostgreSQL">
            Robust relational database for projects requiring complex queries, transactions, and data integrity.
          </Tool>
          <Tool title="MySQL">
            Traditional SQL database used for structured data management in enterprise applications.
          </Tool>
          <Tool title="NVDA">
            Screen reader for testing web accessibility on Windows, ensuring content is perceivable by visually impaired users.
          </Tool>
          <Tool title="VoiceOver">
            Built-in screen reader for MacOS, essential for accessibility testing on Apple devices.
          </Tool>
          <Tool title="Lighthouse">
            Chrome DevTools&apos; built-in auditing tool for performance, accessibility, and SEO optimization.
          </Tool>
          <Tool title="GraphQL">
            Query language for APIs that enables precise data fetching and reduces over-fetching of data.
          </Tool>
          <Tool title="TailwindCSS">
            Utility-first CSS framework for rapid UI development with highly customizable design systems.
          </Tool>
          <Tool title="HTML/CSS">
            Core web technologies for structuring content and creating responsive, visually appealing designs.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Initially, I utilized Figma solely as a design instrument, but it swiftly transformed into a comprehensive virtual whiteboard for my entire team. The collaborative features, which I had not anticipated becoming the main attraction, now stand as a central hub for our innovative brainstorming and project visualization.
          </Tool>

        </ToolsSection>
        <ToolsSection title="Tech Tools">
          <Tool title="Git">
            I utilize Git for efficient version control, facilitating smooth collaboration and code management.
          </Tool>
          <Tool title="Postman">
            Postman is an integral tool in my kit, aiding in the development and testing of APIs.
          </Tool>
          <Tool title="Insomnia">
            I use Insomnia for testing REST APIs, streamlining the development process through easy-to-use functionalities.
          </Tool>
          <Tool title="Heroku">
            Heroku is my preferred platform for deploying, managing, and scaling applications effortlessly.
          </Tool>
          <Tool title="Netlify">
            Netlify assists me in building, deploying, and hosting modern web projects with ease.
          </Tool>
          <Tool title="Visual Studio">
            Visual Studio serves as a powerful IDE, offering a range of features for seamless code development and debugging.
          </Tool>
          <Tool title="Eclipse">
            Eclipse is another reliable IDE in my toolkit, facilitating the development of Java applications and more.
          </Tool>
          <Tool title="MS Office">
            MS Office supports my administrative and documentation needs, offering a suite of applications for various tasks.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            A versatile tool that combines note-taking, wiki creation, and task management, helping teams to organize and prioritize work in a collaborative environment.
          </Tool>
          <Tool title="Discord">
            A communication platform designed for creating communities, offering voice, video, and text communication channels along with various integrations, making it a popular choice among developers and gamers.
          </Tool>
          <Tool title="Slack">
            A business communication platform offering a variety of channels and direct messaging, integrations, and features that foster collaboration and streamline workflows within teams.
          </Tool>
        </ToolsSection>

      </div>
    </SimpleLayout>
  )
}
