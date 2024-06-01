import {
  IconType,
  SiAmazonaws,
  SiAmazonawsHex,
  SiApache,
  SiApacheHex,
  SiBitbucket,
  SiBitbucketHex,
  SiBootstrap,
  SiBootstrapHex,
  SiC,
  SiCanva,
  SiCanvaHex,
  SiCHex,
  SiCplusplus,
  SiCplusplusHex,
  SiCsharp,
  SiCsharpHex,
  SiCss3,
  SiCss3Hex,
  SiDart,
  SiDartHex,
  SiDjango,
  SiDjangoHex,
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiExpressHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiFlask,
  SiFlaskHex,
  SiFlutter,
  SiFlutterHex,
  SiGin,
  SiGinHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiGitlab,
  SiGitlabHex,
  SiGo,
  SiGoHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJquery,
  SiJqueryHex,
  SiLaragon,
  SiLaragonHex,
  SiLaravel,
  SiLaravelHex,
  SiLinux,
  SiLinuxHex,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNestjs,
  SiNestjsHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNginx,
  SiNginxHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiNotionHex,
  SiOpenai,
  SiOpenaiHex,
  SiPhp,
  SiPhpHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrisma,
  SiPrismaHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiReactquery,
  SiReactqueryHex,
  SiRedis,
  SiRedisHex,
  SiSpring,
  SiSpringHex,
  SiSqlite,
  SiSqliteHex,
  SiSupabase,
  SiSupabaseHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTensorflow,
  SiTensorflowHex,
  SiTrello,
  SiTrelloHex,
  SiTypescript,
  SiTypescriptHex,
  SiVisualstudiocode,
  SiVisualstudiocodeHex,
  SiVite,
  SiViteHex
} from '@icons-pack/react-simple-icons'

export type TTech = {
  title: string
  Icon: IconType
  color: string
}

export type TStackCategory = {
  type: string
  techs: TTech[]
}

export const STACKS_HEADER = {
  heading: 'Tech Stacks',
  subHeading: 'Peek into my software toolbox and preferred technology stacks'
}

export const STACK_CATEGORIES: TStackCategory[] = [
  {
    type: 'Languages',
    techs: [
      {
        title: 'C',
        Icon: SiC,
        color: SiCHex
      },
      {
        title: 'C++',
        Icon: SiCplusplus,
        color: SiCplusplusHex
      },
      {
        title: 'Python',
        Icon: SiPython,
        color: SiPythonHex
      },
      {
        title: 'HTML',
        Icon: SiHtml5,
        color: SiHtml5Hex
      },
      {
        title: 'CSS',
        Icon: SiCss3,
        color: SiCss3Hex
      },
      {
        title: 'JavaScript',
        Icon: SiJavascript,
        color: SiJavascriptHex
      },
      {
        title: 'TypeScript',
        Icon: SiTypescript,
        color: SiTypescriptHex
      },
      {
        title: 'Golang',
        Icon: SiGo,
        color: SiGoHex
      },
      {
        title: 'PHP',
        Icon: SiPhp,
        color: SiPhpHex
      },
      {
        title: '.Net',
        Icon: SiCsharp,
        color: SiCsharpHex
      },
      {
        title: 'Dart',
        Icon: SiDart,
        color: SiDartHex
      },
      {
        title: 'Java',
        Icon: SiSpring,
        color: SiSpringHex
      }
    ]
  },
  {
    type: 'Frameworks & Libraries',
    techs: [
      {
        title: 'Tailwind CSS',
        Icon: SiTailwindcss,
        color: SiTailwindcssHex
      },
      {
        title: 'Bootstrap',
        Icon: SiBootstrap,
        color: SiBootstrapHex
      },
      {
        title: 'React.js',
        Icon: SiReact,
        color: SiReactHex
      },
      {
        title: 'Next.js',
        Icon: SiNextdotjs,
        color: SiNextdotjsHex
      },
      {
        title: 'React Query',
        Icon: SiReactquery,
        color: SiReactqueryHex
      },
      {
        title: 'Node.js',
        Icon: SiNodedotjs,
        color: SiNodedotjsHex
      },
      {
        title: 'Express.js',
        Icon: SiExpress,
        color: SiExpressHex
      },
      {
        title: 'Nest.js',
        Icon: SiNestjs,
        color: SiNestjsHex
      },
      {
        title: 'JQuery',
        Icon: SiJquery,
        color: SiJqueryHex
      },
      {
        title: 'Laravel',
        Icon: SiLaravel,
        color: SiLaravelHex
      },
      {
        title: 'Gin',
        Icon: SiGin,
        color: SiGinHex
      },
      {
        title: 'Django',
        Icon: SiDjango,
        color: SiDjangoHex
      },
      {
        title: 'Flask',
        Icon: SiFlask,
        color: SiFlaskHex
      },
      {
        title: 'TensorFlow',
        Icon: SiTensorflow,
        color: SiTensorflowHex
      },
      {
        title: 'OpenAI',
        Icon: SiOpenai,
        color: SiOpenaiHex
      },
      {
        title: "Flutter",
        Icon: SiFlutter,
        color: SiFlutterHex
      }
    ]
  },
  {
    type: 'Databases',
    techs: [
      {
        title: 'Firebase',
        Icon: SiFirebase,
        color: SiFirebaseHex
      },
      {
        title: 'MongoDB',
        Icon: SiMongodb,
        color: SiMongodbHex
      },
      {
        title: 'PostgreSQL',
        Icon: SiPostgresql,
        color: SiPostgresqlHex
      },
      {
        title: 'Supabase',
        Icon: SiSupabase,
        color: SiSupabaseHex
      },
      {
        title: 'MySQL',
        Icon: SiMysql,
        color: SiMysqlHex
      },
      {
        title: 'Redis',
        Icon: SiRedis,
        color: SiRedisHex
      },
      {
        title: 'Prisma',
        Icon: SiPrisma,
        color: SiPrismaHex
      },
      {
        title: 'SQLite',
        Icon: SiSqlite,
        color: SiSqliteHex
      }
    ]
  },
  {
    type: 'Tools',
    techs: [
      {
        title: 'Vite.js',
        Icon: SiVite,
        color: SiViteHex
      },
      {
        title: 'Git',
        Icon: SiGit,
        color: SiGitHex
      },
      {
        title: 'VS Code',
        Icon: SiVisualstudiocode,
        color: SiVisualstudiocodeHex
      },
      {
        title: 'ChatGPT',
        Icon: SiOpenai,
        color: SiOpenaiHex
      },
      {
        title: 'Postman',
        Icon: SiPostman,
        color: SiPostmanHex
      },
      {
        title: 'Docker',
        Icon: SiDocker,
        color: SiDockerHex
      }, {
        title: 'Github',
        Icon: SiGithub,
        color: SiGithubHex
      },
      {
        title: 'BitBucket',
        Icon: SiBitbucket,
        color: SiBitbucketHex
      },
      {
        title: 'GitLab',
        Icon: SiGitlab,
        color: SiGitlabHex
      },
      {
        title: 'Figma',
        Icon: SiFigma,
        color: SiFigmaHex
      },
      {
        title: 'Trello',
        Icon: SiTrello,
        color: SiTrelloHex
      },
      {
        title: 'Notion',
        Icon: SiNotion,
        color: SiNotionHex
      },
      {
        title: 'Canva',
        Icon: SiCanva,
        color: SiCanvaHex
      },
      {
        title: 'Linux',
        Icon: SiLinux,
        color: SiLinuxHex
      },
      {
        title: 'Apache',
        Icon: SiApache,
        color: SiApacheHex
      },
      {
        title: 'Nginx',
        Icon: SiNginx,
        color: SiNginxHex
      },
      {
        title: 'Laragon',
        Icon: SiLaragon,
        color: SiLaragonHex
      },
      {
        title: 'AWS',
        Icon: SiAmazonaws,
        color: SiAmazonawsHex
      }

    ]
  }
]
