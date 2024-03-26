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
        activity: 'UMC 2nd Challenger (Web)',
        links: {
          post: '/UMC/UMC_pass/',
          github: '',
          demo: '',
        },
      },

      {
        date: '2022.07 ~ 2023.02',
        activity: 'UMC 3rd Part Leader (Node.js)',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },

      {
        date: '2023.02 ~ 2023.09',
        activity: 'UMC 4th Part Leader (Web)',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },

      {
        date: '2023.07 ~ 2024.01',
        activity: 'Fast campus X Yanolja Front-end Development Bootcamp',
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
        title: 'Trip Vote',
        description:
          '일행과 함께 투표하며 여행 일정을 만들어가는 모바일 최적화 웹 서비스. 여행 스페이스를 생성하고 검색을 통해 장소를 찾아 투표와 일정을 등록할 수 있다.',
        techStack: ['React.js', 'Spring boot'],
        thumbnailUrl: 'TripVote.png',
        links: {
          post: 'https://github.com/Strong-Potato',
          github: 'https://github.com/Strong-Potato/TripVote-FE',
        },
      },
      {
        title: 'Nine Stay',
        description:
          '숙박 시설을 조회하고 예약하는 웹 서비스. 키워드 및 지역, 날짜, 카테고리 필터를 사용하여 숙소를 검색하고 상세 정보 조회 및 예약할 수 있다.',
        techStack: ['React.js', 'Spring boot'],
        thumbnailUrl: 'NineStay.png',
        links: {
          post: '',
          github: 'https://github.com/YBEMiniProjectTeam/MINI-Front',
        },
      },
      {
        title: 'Festie',
        description:
          '취향이 비슷한 사람들과 페스티벌 정보 및 경험을 공유하는 웹 서비스. 축제/공연 정보 및 후기를 공유하고, 원하는 사람과 Bestie가 되어 동행할 수 있다.',
        techStack: ['React.js', 'Spring boot'],
        thumbnailUrl: 'Festie.png',
        links: {
          post: 'https://www.makeus.in/b840fac8-6171-430a-9328-f3735352c976',
          github: 'https://github.com/UMC-Festie/Festie-FE',
        },
      },
      {
        title: 'SMUthie',
        description:
          '상명대학교 주변 식당 정보를 조회하고, 메뉴를 추천해주는 앱 서비스. 학식 및 학교 주변 식당 위치와 정보를 조회하고, 리뷰를 남길 수 있다. 취향을 선택하여 메뉴 추천을 받을 수 있다.',
        techStack: ['UIKit', 'Node.js'],
        thumbnailUrl: 'SMUthie.png',
        links: {
          post: ',,',
          github: 'https://github.com/SMUthie/SMUthie-BE',
        },
      },
    ],
  },
};
