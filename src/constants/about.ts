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
      "Hi, I'm Horas Siregar. Highly adaptable Full Stack Developer proficient in PHP (Laravel), Java (Spring), Golang, JavaScript (jQuery), Next JS, React JS, Node JS, HTML, CSS, Dart (Flutter), and Python. Skilled in REST API development, Git, Linux, and cloud technologies (AWS, Azure). Strong problem-solving abilities and collaborative mindset for dynamic team contributions."
    ]
  },
  {
    type: 'education',
    description: [
      'Diploma 3 of Information Technology, Del Institute of Technology',
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
