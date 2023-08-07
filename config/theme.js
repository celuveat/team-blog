const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const navbar = {
  hideOnScroll: true,
  logo: {
    alt: "Logo",
    src: "img/logo/logo-black.svg",
    srcDark: "img/logo/logo-white.svg",
    href: "/",
    target: "_self",
  },
  items: [
    {
      to: "front-blog",
      label: "프론트엔드",
      position: "left",
    },
    {
      to: "back-blog",
      label: "백엔드",
      position: "left",
    },
    {
      type: "doc",
      docId: "셀럽잇",
      position: "left",
      label: "팀 문서",
    },
    {
      href: "https://github.com/celuveat",
      label: "GitHub",
      position: "right",
    },
  ],
};

const footer = {
  links: [
    {
      html: `
        Powered by <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">Docusaurus 2</a>, Hosted by <a href="https://github.com/" target="_blank" rel="noreferrer noopener">githubPages</a>
        <br />
        Copyright © ${new Date().getFullYear()} <a href="https://github.com/pumpkiinbell" target="_blank" rel="noreferrer noopener">Celuveat</a>. All rights reserved.
        `,
    },
  ],
};

const blog = {
  // 기존 설정들...
  blogSidebarTitle: "All Blog Posts", // 원하는 사이드바 제목
  blogSidebarCount: "ALL", // 블로그 게시물 수
  postsPerPage: 10, // 페이지 당 블로그 게시물
};

const prism = {
  theme: lightCodeTheme,
  darkTheme: darkCodeTheme,
  additionalLanguages: ["java", "groovy", "docker"]
};

module.exports = Object.assign({ navbar, footer, prism, blog });
