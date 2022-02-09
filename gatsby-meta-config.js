module.exports = {
  title: `JSH99.github.io`,
  description: `SSEO's Gatsby`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.jsh99.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정서현`,
    bio: {
      role: `개발자`,
      description: ['초보 프론트엔드'],
      thumbnail: 'idea.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/JSH99`,
      linkedIn: ``, 
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
        title: '여행지 추천',
        description:
          '자신에게 맞는 여행지를 추천해주는 웹 사이트',
        techStack: ['javascript'],
        thumbnailUrl: 'travel_recommendation.png',
        links: {
          post: '/about',
          github: 'https://github.com/JSH99/Travel_Recommendation',
          demo: 'https://jsh99.github.io',
        },
      },
    ],
  },
};