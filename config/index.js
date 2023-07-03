const themeConfig = require("./theme");
const i18n = require("./i18n");
const config = {
  title: "Celuveat",
  url: "https://celuveat.github.io",
  baseUrl: "/blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "../static/img/logo/favicon.ico",
  organizationName: "celuveat", // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: "blog", // Usually your repo name.
  i18n,
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "back-blog",
        routeBasePath: "back-blog",
        path: "./@backBlog",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "front-blog",
        routeBasePath: "front-blog",
        path: "./@frontBlog",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "G-DBVZBC9QT5",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-DBVZBC9QT5",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [],
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./css/custom.css"),
        },
      },
    ],
  ],
  themeConfig,
};

module.exports = config;
