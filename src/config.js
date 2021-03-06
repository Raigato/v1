module.exports = {
  siteTitle: "Gabriel RAYMONDOU | Fullstack Web Dev",
  siteDescription:
    "Gabriel RAYMONDOU is a freelance full stack web dev based in Cannes, France, specialising in building exceptional websites, applications and powerful custom growth hacking tools.",
  siteKeywords:
    "Gabriel Raymondou, Gabriel, Raymondou, fullstack, web dev, web developer, javascript, react, gatsby",
  siteUrl: "http://raigato.github.io/",
  author: "Gabriel RAYMONDOU",
  githubRepo: "https://github.com/Raigato/v1",
  email: "gabriel.raymondou@gmail.com",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/Raigato",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/gabriel-raymondou/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/roigoujat",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/graymondou",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
  ],

  navHeight: 100,

  colors: {
    primary: "#81799c",
    background: "#1F2041",
  },

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
