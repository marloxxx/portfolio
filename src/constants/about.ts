export type TAbout = {
  type: string
  description: string[]
}

export const ABOUT_HEADER = {
  heading: 'About Me',
  subHeading: 'Get to know me better - my story, interests, and aspirations'
}

export const ABOUT: TAbout[] = [
  {
    type: 'summary',
    description: [
      'Backend-focused Full Stack Developer building secure, scalable enterprise web, mobile, and endpoint systems. Experienced with distributed authentication (OAuth 2.0, OpenID Connect), queue-driven backends, and monorepo full-stack delivery.',
      'Delivered production platforms including ESG Dashboard (ESG maturity & GHG reporting), Licentra (software inventory & compliance with a native Windows Go agent), SI Portal SSO (FusionAuth), real-time Helpdesk PTSI (web + mobile), and multiple fintech and business applications.',
      'Core stack: TypeScript (NestJS, React, tRPC, Prisma), Laravel/PHP, Flutter, Golang, PostgreSQL/MySQL, Redis/BullMQ, and Docker—with strong focus on system design, security, and clean architecture.',
    ]
  },
  {
    type: 'education',
    description: [
      'Bina Nusantara — Major in Computer Science (GPA 3.88/4.00), November 2024 – Present',
      'Del Institute of Technology — Major in Information Technology (GPA 3.80/4.00), August 2021 – September 2024',
      'Activities: Participant of Huawei Summer Camp Student 2023 (5G, Cloud Computing, Big Data, AI); Matriculation Assistant for new students (August 2022).'
    ]
  },
  {
    type: 'interests',
    description: [
      'My primary interest lies in software development, especially web and mobile.',
      'Apart from that, I enjoy competitive programming and teaching.',
      'I take an active interest in technology, business, and geo-politics, as well as how they intersect to affect society.',
      'I also enjoy playing guitar, piano, and football.'
    ]
  }
]
