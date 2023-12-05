// gitprofile.config.js

const config = {
  github: {
    username: 'RobbieG9', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'robert-gilliand',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gilliandr20@students.ecu.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1a1gKS37usOx2AilA636kxPi4nwiQ-CZh/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'HTML',
    'SQL',
    'UX Design',
    'SAS',
    'Tableau',
    'Miscrosoft SQL Server',
    'Visual Studio',
  ],
  experiences: [
    {
      company: 'Jersey Mikes',
    position: 'Position',
     from: 'September 2021',
     to: 'Present',
     companyLink: 'https://example.com',
   },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
   certifications: [
    {
      name: 'Applied Data Analytics(In progress)',
   //   body: 'Lorem ipsum dolor sit amet',
   //   year: 'March 2022',
    //  link: 'https://example.com'
    },
     {
      name: 'AWS Cloud Computing(In progress)',
   //   body: 'Lorem ipsum dolor sit amet',
   //   year: 'March 2022',
    //  link: 'https://example.com'
    },
     {
      name: 'IC2 CyberSecurity(In progress)',
   //   body: 'Lorem ipsum dolor sit amet',
   //   year: 'March 2022',
    //  link: 'https://example.com'
    },
  ], 
  education: [
    {
      institution: ' East Carolina University',
      degree: 'Management Information Systems',
      from: '2020',
      to: '2024',
    },
   
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Splunk Reflection',
      description:
        'Assess my time diving into the Splunk World.',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1qdESe_JyZ2_ZWwfGD1q34Bke2QiHlig6/edit?usp=sharing&ouid=108864146003155618442&rtpof=true&sd=true',
    },
    {
      title: 'NIST CSF Security Accident',
      description:
        'Acting as a Cybersercurity Analyst for XYZ Financial who noticed some issues with logging in, to which I responded as a member of the incident response team.',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1AI_ONFdwuB02t3Tb4rbZbtsasimhltge/edit?usp=sharing&ouid=108864146003155618442&rtpof=true&sd=true',
    },
    {
      title: 'Security Audit',
      description:
        'Performed Security Audit for XYZ Financial.',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1al0WCqFBCfDymdKfB0-UJPgUJ1lF0DkM-pBjLp4uCv0/edit?usp=sharing&resourcekey=0-lK3D6KRwYVTysv3s4tJEIQ',
    },
    {
      title: 'Final Project/Meeting Report Video',
      description:
        'Semester Long  Project where we assess the Enterprise Architecture of a local business.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1MlR7qzYiRr2x23LNKM4wwxXg4kcwieZr/view?usp=sharing',
    },
    {
      title: 'My Pitch',
      description:
        'My personal Sales Pitch',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1EFKWjZ8Ji53bv_xLcxhmwIWxMWPxI1-X/view?usp=sharing',
    },  
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
   limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
