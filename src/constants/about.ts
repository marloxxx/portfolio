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
      "Backend-focused Fullstack Developer experienced in building secure and scalable enterprise web and mobile systems. Skilled in designing microservices-oriented architectures, RESTful APIs, and distributed authentication platforms using OAuth 2.0 and OpenID Connect.",
      "Proven track record delivering 15+ production solutions including Enterprise Single Sign-On (SSO), AI-powered business systems, real-time helpdesk platforms, and fintech applications.",
      "Specialized in Laravel, Flutter, and security-focused backend development with strong emphasis on system design, performance optimization, and clean architecture."
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
