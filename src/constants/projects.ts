import { BOXICONS } from '@/lib/box-icons'
import ASTINA from '@/projects/astina.webp'
import RAJASTOREVPN from '@/projects/rajastorevpn.webp'
import SIBOTOBANGUN from '@/projects/sibotobangun.webp'
import SID3TI from '@/projects/sid3ti.webp'
import SIRAM from '@/projects/siram.webp'
import VPNSTUNNEL from '@/projects/vpnstunnel.webp'


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
    image: RAJASTOREVPN,
    color: '#F2F2F2',
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
      'Broadcast notifications',
    ],
    techs: ['html', 'bootstrap', 'jquery', 'laravel', 'mysql', 'telegram', 'smtp', 'tripay']
  },
  {
    id: 'vpnstunnel',
    title: 'VPNStunnel',
    image: VPNSTUNNEL,
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
    techs: ['laravel', 'bootstrap', 'jquery', 'php', 'mysql', 'ssh', 'openvpn', 'wireguard', 'xray']
  },
  {
    id: 'astina_attendance_app',
    title: 'Astina Attendance App',
    image: ASTINA,
    color: '#FA4000',
    summary:
      "Introducing Astina Attendance App: Your modern solution for effortless attendance tracking. Harnessing facial recognition technology, Astina ensures seamless clock-ins and tamper-proof records. With real-time sync, detailed reporting, and user-friendly design, it's the ultimate tool for boosting productivity in any work environment.",
    links: [
      {
        iconId: 'live',
        destination: 'https://drive.google.com/file/d/1eG61g4BGupubKi-IVvPZwZOE2Jvy9fnz/view?usp=drive_link'
      }
    ],
    features: [
      'Real-time data synchronization',
      'Detailed reporting',
      'User-friendly interfaces',
      'Facial recognition technology',
      'Hybrid and remote work environments',
    ],
    techs: ['flutter', 'bloc', 'clean-architecture', 'face-recognition', 'face-detection', 'flask', 'opencv', 'rest-api', 'geocordinates']
  },
  {
    id: 'siram',
    title: 'Siram - Mobile POS for UPT SPAM',
    image: SIRAM,
    color: '#0099FF',
    summary:
      'Introducing Siram - the Mobile POS for UPT SPAM! This innovative app revolutionizes water usage tracking and payment management in Humabang Hasundutan district. Built on Flutter technology, Siram seamlessly integrates with thermal printers for lightning-fast invoice printing. Say goodbye to cumbersome paperwork and hello to streamlined efficiency with Siram!.',
    links: [
      {
        iconId: 'youtube',
        destination: 'https://youtu.be/nGLdawck-SA'
      }
    ],
    features: [
      'Real-time data synchronization',
      'Detailed reporting',
      'User-friendly interfaces',
      'Thermal printers integration',
      'Location tracking and payment management',
    ],
    techs: ['flutter', 'bloc', 'clean-architecture', 'thermal-printer', 'google-maps', 'geocordinates', 'rest - api']
  }
]

export const MINOR_PROJECTS: TProject[] = [
  {
    id: 'delmart',
    title: 'Delmart',
    image: '',
    color: '#FF8F00',
    summary:
      'Delmart is a Flutter-based mobile shopping application designed for IT Del cooperative. Leveraging Bloc and Clean Architecture principles, it offers seamless user authentication through Google. The app enables users to browse products, manage their shopping carts, place orders, and update their profiles. Backed by a Laravel-powered REST API, Delmart ensures efficient data handling and secure transactions.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/delmart-app'
      },
    ],
    features: [
      'User authentication through Google',
      'Browse products',
      'Manage shopping cart',
      'Place order',
      'Update profile',
    ],
    techs: ['flutter', 'bloc', 'clean architecture', 'google', 'laravel']
  },
  {
    id: 'sibotobangun',
    title: 'Si Boto Bangun',
    image: SIBOTOBANGUN,
    color: '#7373E2',
    summary:
      'Si Boto Bangun is an Android application that helps users to calculate the volumes and areas of various 2D and 3D geometric shapes with ease.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/SiBotoBangun'
      },
    ],
    features: [
      'Responsive UI',
      'Show information about movies and series',
      'Click the poster image to redirect to the Google search result'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    id: 'sid3ti',
    title: 'SI D3TI',
    image: SID3TI,
    color: '#0099FF',
    summary: 'Discover our world: Explore our vision, mission, and goals. Meet the vibrant members of our community, immerse yourself in our captivating gallery, and stay informed with our dynamic class schedule—all on our dedicated student portal. Your journey starts here!',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/sid3ti'
      },
      {
        iconId: 'live',
        destination: 'https://d3ti2021.my.id'
      }
    ],
    features: [
      'Responsive UI',
      'Explore our vision, mission, and goals',
      'Meet the vibrant members of our community',
      'Stay informed with our dynamic class schedule'
    ],
    techs: ['html', 'css', 'jquery', 'laravel', 'mysql', 'cms']
  },
  {
    id: 'kbl',
    title: 'KBL',
    image: '',

    color: '#0099FF',
    summary:
      "KBT is your ultimate online destination for hassle-free travel ticket bookings, offering a variety of vehicle options. With robust email and live chat authentication support, our platform ensures a seamless user experience. Experience top-notch invoice management and convenient online payment solutions, making transactions a breeze. Your journey begins with KBT – where booking meets simplicity!",
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/kbt'
      },
      {
        iconId: 'live',
        destination: 'https://kbl.horas-code.my.id'
      }
    ],
    features: [
      'Responsive UI',
      'Safe and secure Authentication',
      'Invoice management',
      'Online payment system',
      'Live chat support',
    ],
    techs: ['html', 'css', 'jquery', 'laravel', 'mysql', 'cms', 'smtp']
  }
]
