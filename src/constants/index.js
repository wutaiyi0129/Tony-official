import {
  frontend,
  swift,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  swiftblack
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Swift',
    icon: swift,
  },
  {
    title: 'React、Next.js',
    icon: frontend,
  },
  {
    title: 'Vue3',
    icon: backend,
  },
 
  {
    title: '自動化測試',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Swift',
    icon: swiftblack
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'codeceptjs',
    icon: rubyrails,
  },
  {
    name: 'Vue.js',
    icon: redux,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'graphql',
    icon: graphql,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

];

const experiences = [
  {
    title: '軟體測試實習生',
    company_name: 'TVBS-電商團隊',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2022/07-2023-/01',
  },
  {
    title: '前端工程師實習生',
    company_name: 'TVBS',
    icon: microverse,
    iconBg: '#333333',
    date: '2023/01-2023/6',
  },
  {
    title: '前端工程師',
    company_name: '雲書苑',
    icon: kelhel,
    iconBg: '#333333',
    date: '2023/8-2024/03',
  },
  {
    title: '接案前端工程師',
    company_name: '',
    icon: dcc,
    iconBg: '#333333',
    date: '2024/03-present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'TVBS電商 圈圈選物',
    description: '（協作）製作TVBS旗下電商，負責修改結帳邏輯、切版、重構程式碼，同時負責測試。',
    skill:'React',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    
    ],
    image: komikult,
    repo: 'https://trendee.com.tw/',
    demo: 'https://trendee.com.tw/',
  },
  {
    id: 'project-2',
    name: '健康2.0改版',
    description:
      '（協作）負責新健康2.0改版切版，並給予設計的意見，上線後獲得非常高的觸及率',
      skill:'React',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://health.tvbs.com.tw/',
    demo: 'https://health.tvbs.com.tw/',
  },
  {
    id: 'project-3',
    name: 'HelloGPT首頁',
    description: '獨自完成）製作公司產品介紹宣傳首頁，裡面包含一些體驗遊戲、繪本預覽、介紹公司旗下產品，並將此網頁宣傳至學校',
    skill:'Next.js,Bootstrap',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/wutaiyi0129/hello-gpt-homepage',
    demo: 'https://hellogpt-official.006.tw/',
  },
  {
    id: 'project-4',
    name: '快刀系列產品官網',
    description: `（獨自完成）包含設計、製作、文案攥寫，公司產品系列首頁，完成呈現公司產品的優勢。`,
    skill:'Vue3',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/wutaiyi0129/ppvs',
    demo: 'https://ppvs-official.006.tw/',
  },
  {
    id: 'project-5',
    name: 'AI論文生成網',
    description:
      '（獨自完成）串接公司論文資料庫，並製作AI 生成的論文大綱、內文的指導網站。',
      skill:'React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/wutaiyi0129/Ai-Paper-Pass_official',
    demo: 'https://ai-paperpass.006.tw/',
  },
];

export { services, technologies, experiences, projects };
