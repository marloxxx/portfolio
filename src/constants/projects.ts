import { BOXICONS } from '@/lib/box-icons'
import CALCULATOR from '@/projects/calculator.webp'
import CERTIVITA from '@/projects/certivita.webp'
import CKRET from '@/projects/ckret.webp'
import DIGITAL_CLOCK from '@/projects/digital-clock.webp'
import FILMINGG from '@/projects/filmingg.webp'
import QUIZZY from '@/projects/quizzy.webp'
import REGISTRATION_FORM_UI from '@/projects/registration-form-ui.webp'
import SCRENOO from '@/projects/screnoo.webp'
import SUDOKU_WIZARD from '@/projects/sudoku-wizard.webp'

export type TProject = {
  id: string
  title: string
  image: any
  summary: string
  links: {
    iconId: keyof typeof BOXICONS
    destination: string
  }[]
  features: string[]
  techs: string[]
  color: string
}

export const MAJOR_PROJECT_HEADER = {
  heading: 'Featured Projects',
  subHeading:
    'Explore my gallery of the latest projects and practical creations'
}

export const MINOR_PROJECT_HEADER = {
  heading: 'Minor Projects',
  subHeading: 'These modest accomplishments mark my beginnings'
}

export const MAJOR_PROJECTS: TProject[] = [
  {
    id: 'rajastorevpn',
    title: 'RajastoreVPN',
    image: CKRET,
    color: '#FF8A00',
    summary:
      'RajastoreVPN provides quality VPN services at affordable prices. We use Pay-As-You-Go payment model and authentication via Telegram for user security. Our team is committed to data security and a responsive user experience. Use our service for a secure and private internet connection with transparent cost control.',
    links: [
      {
        iconId: 'live',
        destination: 'https://panel.rajastorevpn.com/'
      }
    ],
    features: [
      'User authentication via Telegram',
      'Secure and private internet connection',
      'Transparent cost control',
      'Pay-As-You-Go payment model',
      'Responsive user experience',
    ],
    techs: [
      'Laravel',
      'Bootstrap',
      'JQuery',
      'PHP',
      'MySQL',
      'Telegram Bot API',
      'REST API',
      'Cloudflare',
      'Tripay'
    ]
  },
  {
    id: 'vpnstunnel',
    title: 'VPNStunnel',
    image: QUIZZY,
    color: '#18A08B',
    summary:
      'VPNStunnel offers a wide variety of VPNs with multiple protocols available for free. It caters to users who need secure and private internet access without the expense typically associated with premium VPN services. The VPN options provided ensure that users can bypass geo-restrictions, enhance their online privacy, and protect their data from potential cyber threats. Each VPN service on the site supports different protocols such as SSH, XRAY VPN,  OpenVPN, WireGuard, and more, giving users the flexibility to choose the one that best suits their needs. OpenVPN, for instance, is known for its robust security and versatility, while WireGuard is praised for its speed and modern cryptographic techniques. The site aims to make VPN access easy and accessible, offering user-friendly instructions for setup and configuration. This makes it an excellent resource for individuals who might not be tech-savvy but still want to take advantage of the benefits that a VPN offers. By providing these services for free, the website stands out as a valuable tool for enhancing internet freedom and security for a broad audience.',
    links: [
      {
        iconId: 'live',
        destination: 'https://vpnstunnel.com/'
      }
    ],
    features: [
      'Secure and private internet access',
      'Responsive user experience',
      'Content management system',
    ],
    techs: [
      'Laravel',
      'Bootstrap',
      'JQuery',
      'PHP',
      'MySQL',
      'SSH',
      'OpenVPN',
      'WireGuard',
      'XRay',
    ]
  },
  {
    id: 'sudoku_wizard',
    title: 'Sudoku Wizard',
    image: SUDOKU_WIZARD,
    color: '#7373E2',
    summary:
      'Sudoku Wizard is an algorithmic project based on Backtracking Algorithm. This project illustrates the operation of the backtracking algorithm, which is used to solve any sudoku puzzle.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/sudoku-wizard'
      },
      {
        iconId: 'live',
        destination: 'https://sudoku-wizard.shibamsaha.dev'
      }
    ],
    features: [
      'Generate sudoku problem',
      'Solve existing sudoku problem',
      'Visualize how the backtracking algorithm works in behind'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    id: 'certivita',
    title: 'Certivita',
    image: CERTIVITA,
    color: '#0099FF',
    summary:
      'Certivita is an online tool that helps to generate fully customizable personalized certificates.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/certivita'
      },
      {
        iconId: 'live',
        destination: 'https://certivita.shibamsaha.dev'
      }
    ],
    features: [
      'Generate customizable certificates',
      'List of customizable fields: Certificate Genre, Recipient Name, Certificate Reason, Date of Issue, Signature',
      'Download certificate in .pdf format'
    ],
    techs: ['html', 'tailwindcss', 'javascript', 'pdf-lib', 'sweetalert']
  }
]

export const MINOR_PROJECTS: TProject[] = [
  {
    id: 'screnoo',
    title: 'Screnoo',
    image: SCRENOO,
    color: '#5EEAD4',
    summary:
      'Screnoo is a PC Screen recorder which helps to record desktop or laptop screen along with system or user audio.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/screnoo'
      },
      {
        iconId: 'live',
        destination: 'https://screnoo.shibamsaha.dev'
      }
    ],
    features: [
      'Record PC / Laptop screen',
      'Record system or user audio',
      'Download recording in .mp4 format'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    id: 'filmingg',
    title: 'Filmingg',
    image: FILMINGG,
    color: '#FA4000',
    summary:
      'Filmingg is a Movie searching / guide web application backed up by OMDB API.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/filmingg'
      },
      {
        iconId: 'live',
        destination: 'https://filmingg.shibamsaha.dev'
      }
    ],
    features: [
      'Responsive UI',
      'Show information about movies and series',
      'Click the poster image to redirect to the Google search result'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    id: 'calculator',
    title: 'Calculator',
    image: CALCULATOR,
    color: '#009245',
    summary: 'This is a simple responsive Calculator.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/calculator'
      },
      {
        iconId: 'live',
        destination: 'https://calculator.shibamsaha.dev'
      }
    ],
    features: [
      'Basic binary operations',
      'Delete and All Clear support',
      'Glassmorphism Effect'
    ],
    techs: ['html', 'css', 'javascript']
  },
  {
    id: 'digital_clock',
    title: 'Digital Clock',
    image: DIGITAL_CLOCK,
    color: '#C33764',
    summary: 'This is a simple responsive Digital Clock.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/digital-clock'
      },
      {
        iconId: 'live',
        destination: 'https://digital-clock.shibamsaha.dev'
      }
    ],
    features: [
      'Shows Time',
      'Shows Date and Day',
      'Rainbow bubbles background animation'
    ],
    techs: ['html', 'css', 'javascript']
  },
  {
    id: 'registration_form_ui',
    title: 'Registration Form UI',
    image: REGISTRATION_FORM_UI,
    color: '#E100FF',
    summary:
      'This is a simple front end of a user registration or signup form with glassmorphism styled interface.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/s4shibam/registration-form-ui'
      },
      {
        iconId: 'live',
        destination: 'https://registration-form-ui.shibamsaha.dev'
      }
    ],
    features: ['Responsive User Interface', 'Glassmorphism Effect'],
    techs: ['html', 'css']
  }
]
