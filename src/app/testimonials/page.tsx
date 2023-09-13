import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Testimonials',
  description: "Praise and endorsements from colleagues and clients I've collaborated with in my professional journey.",
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Praise and Endorsements"
      intro="In this section, you will find a collection of accolades and commendations from esteemed colleagues and clients with whom I've had the privilege to collaborate. Their endorsements attest to my dedication, expertise, and the quality of work I deliver in every project I undertake."
    >
      <div className="space-y-20">
        <SpeakingSection title="Ty Hamilton">
          <Appearance
            href="https://www.linkedin.com/in/ty-hamilton"
            title="In space, no one can watch you stream — until now"
            description="I've been fortunate to work alongside Fuaad, who is a genuine powerhouse in the software development arena. Fuad isn't just technically adept; he brings a human touch to his role, always ready with a smile and encouraging words for his team. He embodies a rare blend of skill and kindness, always pushing the envelope while ensuring a harmonious team dynamic. If you're looking for a developer who combines expertise with great work ethic and camaraderie, Fuaad's your person. He's a true asset to any team.            "
            event="Project Coordinator"
            cta="Linkedin"
          />
        </SpeakingSection>
        <SpeakingSection title="Hibbatun-Nasser">
          <Appearance
            href="https://www.linkedin.com/in/hibbatun-nasser-a-shobambi-85a4ab108"
            title="Fuaad is diligent, professional and reliable."
            description="Fuaad is diligent, professional and reliable. He understands clients' needs and delivers on project timelines.
            
            Fuaad was commissioned to re-design and build my podcast/blog website. He exceeded expectations proffered innovative ideas to enhance the functionality of the website.            "
            event="Lawyer | Manager"
            cta="Linkedin"
          />
        </SpeakingSection>
        <SpeakingSection title="Mahira Qamar">
          <Appearance
            href="https://www.linkedin.com/in/mahira-qamar-abb92517a"
            title="Fuaad is an excellent example of a mentor"
            description="I have worked very closely with Fuaad during the several months that he has served as Data Entry
            Specialist. Fuaad has excelled in this role, exhibiting one of the highest levels of productivity while consistently maintaining high standards for quality and accuracy. Taking initiatives every time he saw opportunities to make things better with a positive attitude.
            Fuaad is an excellent example of a mentor. Its always a pleasure working with him."
            event="Data Analyst"
            cta="Linkedin"
          />
        </SpeakingSection>
        <SpeakingSection title="Maham Samreen">
          <Appearance
            href="https://www.linkedin.com/in/maham-samreen-059591216"
            title="Fuaad is an excellent example of a mentor"
            description="Fuaad is an excellent and exceptionally talented colleague who is a highly motivated team player.
            His work is always outstanding, and he always goes the extra mile to ensure that the company standards and requirements are met. He is a highly skilled and helpful professional with a positive attitude. I am greatly impressed by his work ethic and communication skills. Moreover, he is a great listener who is meticulous and easily adjusts to any given situation or business dynamics.
            Working with Fuaad has been a great experience and with his impeccable emotional intelligence skills, I have had a chance to learn many hard and soft skills from him. Thanks, Fuaad! :)"
            event="Data Entry Clerk"
            cta="Linkedin"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
