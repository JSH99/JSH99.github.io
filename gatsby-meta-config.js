module.exports = {
  title: `JSH99.github.io`,
  description: `SSEO's Gatsby`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.jsh99.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `JSH99/JSH99.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정서현`,
    bio: {
      role: `개발자`,
      description: ['초보 프론트엔드', '꾸준히 성장 중인'],
      thumbnail: 'Memoji.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/JSH99`,
      linkedIn: `https://www.linkedin.com/in/seohyeon-jeong-9a5b40234/`,
      email: `tjgus9966@gmail.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.09 ~',
        activity: '개발 블로그 운영',
        links: {
          post: '/introdution',
          github: 'https://github.com/JSH99/JSH99.github.io',
          demo: 'https://jsh99.github.io',
        },
      },

      {
        date: '2022.03 ~ 2022.08',
        activity: 'UMC 2기 챌린저 (Web)',
        links: {
          post: '/UMC/UMC_pass/',
          github: '',
          demo: '',
        },
      },

      {
        date: '2022.07 ~ 2022.08',
        activity: 'MakeAnything 프로젝트',
        links: {
          post: 'https://ambitious-fruitadens-299.notion.site/MakeAnything-8b9086c9843840469d638be8758e7a87',
          github: 'https://github.com/MakeAnythingTeam',
          demo: '',
        },
      },
  ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'MakeAnything (3D 모델링 리소스 중계 서비스)',
        description:
          '3D 모델링 리소스를 판매/구매 하는 웹 서비스. 개인 또는 기업 설계자가 자신이 만든 리소스를 업로드하고, 이용자는 원하는 리소스를 다운로드하여 모델을 직접 출력하거나 대행 업체를 통해 전달 받는다.',
        techStack: ['React.js','Spring boot'],
        thumbnailUrl: 'MakeAnything.png',
        links: {
          post: 'https://ambitious-fruitadens-299.notion.site/MakeAnything-8b9086c9843840469d638be8758e7a87',
          github: 'https://github.com/MakeAnythingTeam',
          demo: '',
        },
      },

    ],
  },
};