import DEL from '@/companies/del.webp'
import GCI from '@/companies/gci.webp'
import SI from '@/companies/si.webp'

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
      name: 'PT Surveyor Indonesia',
      logo: SI,
      link: 'https://ptsi.co.id/',
      color: '#FF0000'
    },
    designation: 'Programmer Staff',
    location: 'South Jakarta, DKI Jakarta, Indonesia',
    tenure: { from: 'November 2024', to: 'Present' },
    description: [
      'Built ESG Dashboard, an enterprise ESG maturity platform (Turborepo: React 19 + NestJS 11 + tRPC + Prisma) for hierarchical corporate groups—maturity assessments per reporting period, GHG Scope 1/2/3 rollups, executive dashboards, geographic emission heatmaps (MapLibre), evidence management, and org-scoped RBAC.',
      'Built Licentra, an enterprise software inventory and compliance platform (pnpm/Turborepo): React dashboard, NestJS API (tRPC + Prisma), Windows Go agent, and BullMQ workers for fleet-wide audit ingest, compliance scoring, licence seat tracking, and executive PDF/CSV/XLSX reports.',
      'Designed and shipped the Licentra Windows agent for registry apps, running processes, and filesystem executables, including USB mass-deploy bundles, per-device API key auth, heartbeat monitoring, and SHA-256–verified in-place auto-update (amd64 & 386).',
      'Delivered SI Portal SSO (Laravel 12 + FusionAuth Enterprise) with dual-protocol SSO (V1 & V2), OAuth 2.0 / OpenID Connect, JWT auth, HMAC-validated global logout webhooks, RBAC, and organisation-wide audit logging.',
      'Developed Helpdesk PTSI (Laravel 11) with real-time WebSocket notifications (Reverb), Zoom meeting integration, FusionAuth SSO, Firebase push, SI Portal employee sync, SLA tracking, and role-based ticket workflows.',
      'Shipped Helpdesk PTSI Mobile (Flutter, clean architecture + BLoC) with performance-based ticket management, priority matrix, real-time SLA timers, dual feedback, and FCM push notifications for Android and iOS.',
      'Implemented cross-cutting enterprise patterns: org-/unit-scoped RBAC, secure session and JWT auth, queue-based processing (Redis/BullMQ), object storage (MinIO/S3), CI/CD (GitHub Actions), and Docker Compose + Traefik production deployment.',
    ],
    techStack: [
      'TypeScript',
      'React',
      'NestJS',
      'tRPC',
      'Prisma',
      'PostgreSQL',
      'Zod',
      'TanStack Query',
      'Golang',
      'Laravel',
      'PHP',
      'Flutter',
      'Bloc',
      'Clean Architecture',
      'FusionAuth',
      'OAuth 2.0',
      'OpenID Connect',
      'JWT',
      'BullMQ',
      'Redis',
      'MySQL',
      'MapLibre',
      'Docker',
      'Traefik',
      'MinIO',
      'GitHub Actions',
      'Firebase',
      'WebSocket',
      'Git',
    ]
  },
  {
    company: {
      name: 'PT. Garuda Cyber Indonesia',
      logo: GCI,
      link: 'https://garudacyber.co.id/',
      color: '#5255C1'
    },
    designation: 'Programmer Intern',
    location: 'Pekanbaru, Riau, Indonesia',
    tenure: { from: 'February 2024', to: 'June 2024' },
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
      'Git',
      'CI/CD',
    ]
  },
  {
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
      'Led the development of the "Tourism and Events App," which serves over 1,000 users, significantly enhancing local exploration and user engagement.',
      'Created the "Mobile POS for UPT SPAM," improving water fee recording efficiency by 30-40% through streamlined processes and user-friendly interfaces.',
      'Integrated Google Maps API to enhance navigation, resulting in a 20-30% increase in user satisfaction by providing accurate and reliable directions.',
      'Implemented thermal printers, reducing invoicing time by 35-45% and enhancing accuracy by minimizing manual entry errors.',
      'Utilized GetX for efficient state management, reducing app crashes by 35-50% and ensuring a more stable user experience.',
      'Applied clean architecture principles, cutting bug-fix time by 45-55% through improved code structure and maintainability.',
      'Demonstrated expertise in Flutter, Dart, and Git, ensuring smooth app functionality, consistent updates, and efficient maintenance.',
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
