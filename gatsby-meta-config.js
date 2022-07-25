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
        date: '2021.09 ~ 2021.11',
        activity: 'We.borrow(대여 물품 관리 웹) 프로젝트',
        links: {
          post: '',
          github: 'https://github.com/JSH99/we.borrow',
          demo: '',
        },
      },

      {
        date: '2022.03 ~',
        activity: 'UMC 2기 챌린저 (Web)',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },

    {
      date: '2022.07 ~',
      activity: 'UMC 3기 운영진 (Node.js)',
      links: {
        post: '',
        github: '',
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
        title: 'We.borrow(대여 물품 관리 웹)',
        description:
          '수기 작성을 통한 물품 대여 진행의 불편함을 개선하고자 만든 웹 사이트. 목록 조회 및 검색을 통해 사용자가 대여 가능 물품을 대여하고, 관리자가 물품 등록&삭제 및 반납 처리를 한다.',
        techStack: ['react','node.js'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: 'https://github.com/JSH99/we.borrow',
          demo: '',
        },
      },

      {
        title: '여행지 추천',
        description:
          '여행을 가고 싶지만 어디로 떠나야 할지 막막한 분들을 위해 자신에게 잘 맞는 여행지를 추천해주는 웹 사이트',
        techStack: ['javascript'],
        thumbnailUrl: 'travel_recommendation.png',
        links: {
          post: '',
          github: 'https://github.com/JSH99/Travel_Recommendation',
          demo: '',
        },
      },
    ],
  },
};