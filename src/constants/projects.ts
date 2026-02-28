import { BOXICONS } from '@/lib/box-icons'
import ASTINA from '@/projects/astina.webp'
import DELHUB from '@/projects/delhub.webp'
import DELMARTWEB from '@/projects/delmart-web.webp'
import DELMART from '@/projects/delmart.webp'
import GRAGEAPP from '@/projects/grage-app.webp'
import HELPDESKWEB from '@/projects/helpdesk-web.webp'
import HELPDESK from '@/projects/helpdesk.webp'
import ITO from '@/projects/ito.webp'
import KBL from '@/projects/kbl.webp'
import KBR from '@/projects/kbr.webp'
import MONTRAQ from '@/projects/montraq.webp'
import RAJASTOREVPN from '@/projects/rajastorevpn.webp'
import SIBOTOBANGUN from '@/projects/sibotobangun.webp'
import SID3TI from '@/projects/sid3ti.webp'
import SIPORTAL from '@/projects/siportal.webp'
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
    id: 'siportal-sso',
    title: 'SI Portal SSO',
    image: SIPORTAL,
    color: '#1E40AF',
    summary:
      'SI Portal SSO is an enterprise-grade Single Sign-On platform developed for PT Surveyor Indonesia to manage centralized access to all internal company applications. Built with Laravel 12 and integrated with FusionAuth Enterprise, the system enables employees to access multiple applications with a single authentication, significantly improving operational efficiency and enterprise security. The platform features dual-protocol support (SSO V1 & V2), OAuth 2.0, OpenID Connect, JWT-based authentication, and a comprehensive webhook system for global logout functionality. With advanced security features including token encryption, rate limiting, CSRF protection, and comprehensive audit logging, SI Portal SSO ensures secure and seamless access management across the entire organization.',
    links: [],
    features: [
      'Dual-protocol SSO support (V1 & V2) for legacy and modern applications',
      'FusionAuth Enterprise integration with OAuth 2.0 and OpenID Connect',
      'JWT-based authentication with RS256 signing',
      'Global logout webhook system with HMAC-SHA256 validation',
      'Comprehensive audit logging and activity tracking',
      'RESTful API with versioning for authentication and application management',
      'Role-based access control (RBAC) with Spatie Laravel Permission',
      'Real-time dashboard for user and application management',
      'Token encryption and automatic refresh mechanism',
      'Rate limiting and security features (CSRF, XSS prevention)',
      'Multi-language support (Indonesian/English)',
      'Queue-based webhook delivery for optimal performance',
    ],
    techs: [
      'laravel',
      'php',
      'fusionauth',
      'oauth2',
      'openid-connect',
      'jwt',
      'mysql',
      'rest-api',
      'webhook',
      'blade',
      'bootstrap',
      'tailwindcss',
      'vite',
      'redis',
      'queue',
      'spatie-permission',
      'spatie-activity-log',
    ]
  },
  {
    id: 'helpdesk-ptsi',
    title: 'Helpdesk PTSI',
    image: HELPDESKWEB,
    color: '#3B82F6',
    summary:
      'A comprehensive web-based helpdesk management system for IT service ticket management with real-time notifications, Zoom API integration, and SSO authentication. Built using Laravel 11 with modular event-driven architecture, featuring role-based access control, ticket tracking, assignment system, and seamless integration with external services like Firebase, FusionAuth, and Zoom API.',
    links: [],
    features: [
      'Comprehensive ticket management system with status tracking',
      'Real-time notifications using Laravel Reverb (WebSocket)',
      'Zoom API integration for automated meeting creation',
      'Role-based access control with 4 access levels',
      'SSO authentication via FusionAuth',
      'Firebase Cloud Messaging for push notifications',
      'Bulk user import from Excel',
      'Employee data synchronization from SI Portal API',
      'Live chat system between users and technicians',
      'FAQ management and service catalog',
      'Waiting list management',
      'Audit logging and activity tracking',
      'Dashboard analytics with ticket statistics',
      'SLA tracking and performance monitoring',
      'Ticket rating and feedback system',
    ],
    techs: [
      'laravel',
      'php',
      'mysql',
      'tailwindcss',
      'javascript',
      'websocket',
      'reverb',
      'firebase',
      'fusionauth',
      'zoom-api',
      'rest-api',
      'eloquent-orm',
      'queue',
      'excel',
      'datatables',
    ]
  },
  {
    id: 'helpdesk-ptsi-mobile',
    title: 'Helpdesk PTSI Mobile',
    image: HELPDESK,
    color: '#3B82F6',
    summary:
      'A comprehensive Flutter-based helpdesk application for PTSI (PT Solusi Integrasi) featuring a Performance-Based Ticket Management System with advanced SLA tracking, priority matrix, and dual feedback system. The app revolutionizes IT support ticket management with auto-calculated priorities, real-time SLA countdown timers, and comprehensive performance analytics. Built with clean architecture and BLoC pattern, it ensures scalable, maintainable code while delivering an exceptional user experience across Android and iOS platforms.',
    links: [],
    features: [
      'Performance-Based Ticket Management System',
      'Auto-calculated Priority Matrix (Impact × Urgency)',
      'Real-time SLA tracking with countdown timers',
      'Dual feedback system (user-friendly + technical documentation)',
      'Major Incident auto-detection and notifications',
      'Performance metrics with visual indicators',
      'Push notifications via Firebase Cloud Messaging',
      'Role-based access control',
      'File attachment and document management',
      'Zoom Meeting integration for virtual support',
      'Multi-language support (English & Indonesian)',
      'Real-time ticket status updates',
    ],
    techs: [
      'flutter',
      'dart',
      'bloc',
      'cubit',
      'clean-architecture',
      'repository-pattern',
      'dependency-injection',
      'firebase-messaging',
      'firebase-crashlytics',
      'rest-api',
      'jwt',
      'go-router',
      'dio',
      'lottie',
      'material-design',
      'secure-storage',
      'image-picker',
      'file-picker',
      'pdf-viewer',
      'google-fonts',
      'intl',
      'geolocator',
      'zoom-api'
    ]
  },
  // {
  //   id: 'solusi-app',
  //   title: 'Solusi App - Enterprise Mobile Solution',
  //   image: PLACEHOLDER,
  //   color: '#0099FF',
  //   summary:
  //     'Solusi App is an enterprise mobile application built with Flutter that provides an integrated platform to help companies manage business solutions, products, clients, tenders, and projects. The application combines AI technology for product recommendations, consultation chatbot with speech-to-text, and multi-platform tender management system with a modern and responsive interface. Built with Clean Architecture, BLoC pattern for state management with 20+ BLoC/Cubit implementations, and optimized performance using caching strategies.',
  //   links: [
  //     {
  //       iconId: 'live',
  //       destination: 'https://play.google.com/store/apps/details?id=com.solusi.app'
  //     }
  //   ],
  //   features: [
  //     'AI-powered product recommendations with matrix analysis',
  //     'AI chatbot with speech-to-text for interactive business consultation',
  //     'Multi-platform tender management (BCI, Indo, LPSE) with search & filter',
  //     'Project Scouter for portfolio matching and opportunity analysis',
  //     'Intelligence Solution with client research and decision matrix',
  //     'Path Solution for industry-based problem identification',
  //     'PowerPoint Solution with automatic presentation generation',
  //     'OTP-based authentication and secure user profile management',
  //     'Real-time data synchronization',
  //     'Offline support with local caching (Hive database)',
  //     'Internationalization (i18n) - Indonesian & English',
  //     'Modern UI/UX with custom animations and Lottie',
  //     'Firebase Crashlytics for error tracking and monitoring',
  //     'Responsive design with Flutter ScreenUtil',
  //   ],
  //   techs: [
  //     'flutter',
  //     'dart',
  //     'bloc',
  //     'clean-architecture',
  //     'getit',
  //     'dio',
  //     'firebase',
  //     'hive',
  //     'auto-route',
  //     'lottie',
  //     'speech-to-text',
  //     'rest-api',
  //     'caching',
  //     'i18n',
  //     'repository-pattern',
  //     'dependency-injection'
  //   ]
  // },
  {
    id: 'grage-mall-app',
    title: 'Grage Mall App',
    image: GRAGEAPP,
    color: '#18A08B',
    summary:
      'Grage Mall App is a comprehensive Flutter-based mobile application designed to enhance the shopping mall experience for visitors. The app provides a complete digital companion solution featuring an integrated loyalty points system, comprehensive tenant directory, event calendar, and various customer engagement features. Built with Clean Architecture and BLoC pattern, it offers seamless backend API integration, real-time push notifications, and modern UI/UX design with custom animations. The application enables users to earn and redeem loyalty points, browse tenant information, stay updated with mall events and promotions, manage their profiles, and enjoy a streamlined shopping experience with features like receipt upload, daily check-ins, and digital membership cards.',
    links: [
      {
        iconId: 'live',
        destination: 'https://play.google.com/store/apps/details?id=id.co.gragegroup.grageapp&pcampaignid=web_share'
      }
    ],
    features: [
      'Loyalty points system with automatic calculation',
      'Digital membership card with barcode scanner',
      'Comprehensive tenant directory with category filtering',
      'Real-time search functionality',
      'Event calendar and promotion management',
      'Push notifications via Firebase Cloud Messaging',
      'OTP authentication and Google Sign-In integration',
      'Receipt upload for point accumulation',
      'Daily check-in feature',
      'Transaction history and point redemption',
      'User profile management',
      'Favorite stores functionality',
      'Location services integration',
      'Responsive UI with custom animations',
    ],
    techs: [
      'flutter',
      'dart',
      'bloc',
      'clean-architecture',
      'firebase',
      'firebase-messaging',
      'firebase-analytics',
      'firebase-crashlytics',
      'rest-api',
      'dio',
      'getit',
      'auto-route',
      'google-sign-in',
      'otp',
      'lottie',
      'shimmer',
      'geolocator',
      'image-picker',
      'cached-network-image',
      'google-maps',
      'table-calendar',
    ]
  },
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
    techs: ['flutter', 'bloc', 'clean-architecture', 'repository-pattern', 'thermal-printer', 'google-maps', 'geocordinates', 'rest - api']
  },
  {
    id: 'kbt',
    title: 'KBL - Koperasi Bintang Laguboti',
    image: KBL,
    color: '#0099FF',
    summary:
      "KBL is your ultimate online destination for hassle-free travel ticket bookings, offering a variety of vehicle options. With robust email and live chat authentication support, our platform ensures a seamless user experience. Experience top-notch invoice management and convenient online payment solutions, making transactions a breeze. Your journey begins with KBT – where booking meets simplicity!",
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/kbt'
      },
      {
        iconId: 'live',
        destination: 'https://travelbook.horas-code.my.id'
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
  },
  {
    id: 'kbr-koperasi',
    title: 'KBR Koperasi Mobile App',
    image: KBR,
    color: '#0099FF',
    summary:
      'KBR Koperasi Mobile Banking App is a comprehensive Flutter-based mobile banking application designed for KBR Koperasi members. The app provides complete digital financial services including savings management (principal, mandatory, and special savings), loan applications with simulation and tracking, installment management, transaction history, top-up and withdrawal features, and real-time notifications. Built with Clean Architecture and BLoC pattern, the app ensures scalability, maintainability, and optimal performance. With multi-language support (Indonesian and English), modern UI/UX with Material Design, and seamless RESTful API integration, KBR Koperasi App delivers a secure and user-friendly banking experience for cooperative members.',
    links: [
      {
        iconId: 'live',
        destination: 'https://play.google.com/store/apps/details?id=com.kbrkoperasi.mobile&pcampaignid=web_share'
      }
    ],
    features: [
      'User authentication and secure login system',
      'Savings management (principal, mandatory, special savings)',
      'Loan application with simulation and status tracking',
      'Installment management and payment tracking',
      'Transaction history with detailed records',
      'Top-up and withdrawal functionality',
      'Real-time notifications',
      'User profile management',
      'Responsive and modern UI/UX',
    ],
    techs: [
      'flutter',
      'dart',
      'bloc',
      'clean-architecture',
      'repository-pattern',
      'dio',
      'auto-route',
      'firebase',
      'firebase-crashlytics',
      'lottie'
    ]
  },
  {
    id: 'montraq',
    title: 'Montraq',
    image: MONTRAQ,
    color: '#43af4b',
    summary:
      'Montraq is a web-based personal and family finance manager built with Laravel 12 and Filament v4. It provides full-featured budgeting, multi-account tracking, and receipt scanning via Tesseract OCR—all without paid APIs. The app supports multiple roles (Owner, Member, Viewer), monthly budget limits with progress tracking, mandatory expense management with due dates, and rule-based financial insights including a health score. Receipt OCR runs in a queue: upload → extract text → parse amount, date, merchant → suggest category → draft transaction. Monthly locking prevents edits to closed periods. The admin panel offers dashboard widgets for balance overview, income/expense charts, budget progress, bill checklist, top spending categories, and AI-generated insights.',
    links: [
      {
        iconId: 'live',
        destination: 'https://montraq.horas-code.my.id'
      }
    ],
    features: [
      'Multi-role access (Owner, Member, Viewer) with Spatie Laravel Permission',
      'Financial accounts (cash, bank, e-wallet) with balance tracking',
      'Income/expense categories (system + custom)',
      'Transaction CRUD with backdate support and draft status',
      'Monthly budgets with progress tracking and widgets',
      'Mandatory expenses (recurring bills) with due dates and status',
      'Recurring transactions (auto-generated)',
      'Receipt OCR: upload → queue → Tesseract extract → regex parse → draft transaction',
      'Monthly lock to prevent editing closed months',
      'Rule-based financial insights and health score (0–100)',
      'Dashboard: balance overview, 6-month charts, budget table, bill checklist, top categories, insights',
      'User and role management in Filament admin',
      'Queue-based OCR processing for scalability',
      'Supports MySQL, PostgreSQL, or SQLite',
    ],
    techs: [
      'laravel',
      'php',
      'filament',
      'mysql',
      'spatie-permission',
      'spatie-activity-log',
      'tesseract',
      'ocr',
      'queue',
      'redis',
      'inertia',
      'vue',
      'tailwindcss',
      'vite',
      'blade',
      'rest-api',
      'eloquent-orm',
    ],
  }
]

export const MINOR_PROJECTS: TProject[] = [
  {
    id: 'ito-humbang',
    title: 'Information Tourism App',
    image: ITO,
    color: '#00C853',
    summary: "Discover the beauty and culture of Humbang Hasundutan with the ITO Mobile App! This cutting-edge application is your ultimate travel companion, offering comprehensive information about local attractions and exciting events. Seamlessly integrated with Google Maps, ITO ensures you navigate with ease and precision, providing real-time updates on tourist destinations. Whether you're exploring stunning natural landscapes or immersing yourself in vibrant cultural festivals, ITO Mobile App makes your journey unforgettable and hassle-free. Experience Humbang Hasundutan like never before, right at your fingertips.",
    links: [
      {
        iconId: 'live',
        destination: 'https://drive.google.com/file/d/1Be3537_bMXcChTSoehmUkfpYqh4Uv4Va/view?usp=sharing'
      }
    ],
    features: [
      'Geolocation and Google Maps integration',
      'User-friendly interfaces',
      'Authentication and Authorization',
    ],
    techs: ['flutter', 'getx', 'clean-architecture', 'google-maps', 'geocordinates', 'rest-api']
  },
  {
    id: 'delhub-app',
    title: 'Delhub App',
    image: DELHUB,
    color: '#3493C9',
    summary: "Delhub App is a cutting-edge tool designed to simplify and enhance the management of final projects, theses, and internships for students and faculty. It offers a seamless scheduling system, real-time notifications, and transparent grading, ensuring smooth communication and efficient coordination. With timely reminders and a user-friendly interface, Delhub App ensures you never miss a meeting or deadline, providing a secure and reliable platform that fosters academic success and integrity.",
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/delhub'
      }
    ],
    features: [
      'Scheduling system',
      'Real-time notifications',
      'Transparent grading',
      'User-friendly interface',
    ],
    techs: ['flutter', 'bloc', 'clean-architecture', 'rest-api', 'firebase-messaging']
  },
  {
    id: 'delmart-app',
    title: 'Delmart App',
    image: DELMART,
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
    id: 'delmart',
    title: 'Delmart',
    image: DELMARTWEB,
    color: '#FF8F00',
    summary: 'Delmart Admin and REST API is a comprehensive backend system designed for the Delmart e-commerce platform, which serves the IT Del cooperative. Built with Laravel, this project encompasses both an admin panel for managing various aspects of the e-commerce application and a REST API to facilitate interaction with the mobile frontend developed in Flutter.',
    links: [
      {
        iconId: 'github',
        destination: 'https://github.com/marloxxx/delmart'
      },
      {
        iconId: 'live',
        destination: 'https://delmart.horas-code.my.id'
      }
    ],
    features: [
      'Admin panel',
      'REST API',
      'User authentication',
      'User management',
      'Product management',
      'Social media integration',
    ],
    techs: ['html', 'css', 'jquery', 'laravel', 'mysql']
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
  }
]
