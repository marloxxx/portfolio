import DEL from '@/companies/del.webp'
import GCI from '@/companies/gci.webp'

export type TCompany = {
  name: string
  logo: any
  link: string
  color: string
}

export type TTenure = {
  from: string
  to: string
}

export type TExperience = {
  company: TCompany
  designation: string
  location: string
  tenure: TTenure
  description: string[]
  techStack: string[]
}

export const EXPERIENCES_HEADER = {
  heading: 'My Experiences',
  subHeading: 'Know about my professional journey and learnings'
}

export const EXPERIENCES: TExperience[] = [
  {
    company: {
      name: 'PT. Garuda Cyber Indonesia',
      logo: GCI,
      link: 'https://garudacyber.co.id/',
      color: '#5255C1'
    },
    designation: 'Programmer Intern',
    location: 'Pekanbaru, Riau, Indonesia',
    tenure: { from: 'February 2024', to: 'Present' },
    description: [
      'Developed two mobile applications and one website, demonstrating proficiency in cross-platform development.',
      'Completed the UI for the Smart School parent app within a week, successfully meeting project deadlines.',
      'Implemented a clean architecture in the Smart Meeting Room app, resulting in 30-50% faster bug fixes and feature additions by simplifying code maintenance and enhancing modularity.',
      'Integrated Firebase for authentication and push notifications, which boosted user engagement by 45-55% through real-time updates and seamless user experience.',
      'Engineered a REST API using Golang and Docker, enhancing scalability by 15-20% through efficient resource management and containerization.',
      'Designed and developed a university program website using Laravel and Next.js, effectively addressing diverse frontend and backend requirements.',
      'Increased web traffic by 35-45% through advanced SEO techniques and responsive design, significantly improving online visibility and user experience.'
    ],
    techStack: [
      'Next.js',
      'React Query',
      'Tailwind CSS',
      'Laravel',
      'Golang',
      'Docker',
      'Firebase',
      'Flutter',
      'GIT',
      'CI/CD'
    ]
  }, {
    company: {
      name: 'Egov Center IT Del',
      logo: DEL,
      link: 'https://www.del.ac.id/',
      color: '#5255C1'
    },
    designation: 'Mobile App Developer',
    location: 'Toba, Sumatera Utara, Indonesia',
    tenure: { from: 'July 2023', to: 'December 2023' },
    description: [
      'Led the development of the "Tourism and Events App," which serves over 1,000 users, significantly enhancing local exploration and user engagement.', 'Created the "Mobile POS for UPT SPAM," improving water fee recording efficiency by 30-40% through streamlined processes and user-friendly interfaces.',
      'Integrated Google Maps API to enhance navigation, resulting in a 20-30% increase in user satisfaction by providing accurate and reliable directions.',
      'Implemented thermal printers, reducing invoicing time by 35-45% and enhancing accuracy by minimizing manual entry errors.',
      'Utilized GetX for efficient state management, reducing app crashes by 35-50% and ensuring a more stable user experience.',
      'Applied clean architecture principles, cutting bug-fix time by 45-55% through improved code structure and maintainability.', 'Demonstrated expertise in Flutter, Dart, and Git, ensuring smooth app functionality, consistent updates, and efficient maintenance.'
    ],
    techStack: [
      'Flutter',
      'GetX',
      'Git',
      'Google Maps API',
      'Thermal Printer',
      'Get Location',
      'Clean Architecture',
    ]
  }
]
