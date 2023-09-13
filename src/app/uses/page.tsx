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
          <Tool title="M2 MacBook Air">
            My everyday device for coding is the ultra-fast and powerful M2 MacBook Air. Its remarkable performance and efficiency greatly enhance my coding experience, making it a vital tool in my software development endeavors.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="JavaScript">
            A core technology of the web, JavaScript enables me to create dynamic content and implement complex features on websites. It is a versatile language known for its crucial role in web development, allowing for the creation of rich and interactive web applications.
          </Tool>
          <Tool title="Java">
            Java, a high-level, class-based, and object-oriented programming language, is known for its portability and robust performance. I leverage its versatility to build a wide array of applications, ranging from mobile applications to enterprise-scale systems.
          </Tool>
          <Tool title="React">
            React, a powerful JavaScript library, empowers me to build user interfaces with a component-based architecture. It facilitates the creation of reusable UI components, enhancing the speed and efficiency of the development process.
          </Tool>
          <Tool title="Node.js">
            As a server-side platform built on Chrome JavaScript runtime, Node.js allows me to develop scalable network applications. It is known for its non-blocking, event-driven I/O model, making it lightweight and efficient, perfect for data-intensive real-time applications.
          </Tool>
          <Tool title="Express.js">
            A minimal and flexible Node.js web application framework, Express.js helps me quickly build robust APIs. It streamlines the creation of server-side logic, offering a range of features to develop web and mobile applications.
          </Tool>
          <Tool title="GraphQL">
            GraphQL serves as a query language for APIs, enabling me to request only the data I need, and nothing more. It provides a more efficient, powerful, and flexible alternative to the traditional REST API, allowing for more precise data retrieval.
          </Tool>
          <Tool title="MongoDB">
            MongoDB, a popular NoSQL database, offers flexibility in handling data storage. I use it to create scalable and performance-oriented database solutions, facilitating the storage of data in a JSON-like format, which makes it easier to pass data between client and server.
          </Tool>
          <Tool title="HTML/CSS">
            HTML and CSS are foundational technologies in web development. I utilize HTML to structure web pages and use CSS to style them, crafting visually captivating and responsive web designs that offer excellent user experiences.
          </Tool>
          <Tool title="RESTful APIs & Responsive Design">
            I specialize in crafting RESTful APIs, which enable the interaction between different software components in a standard way. Additionally, my expertise in responsive design ensures a seamless and pleasing user experience across a variety of devices and screen sizes.
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
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.
          </Tool>
        </ToolsSection>

      </div>
    </SimpleLayout>
  )
}
