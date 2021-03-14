module.exports = {
  title: "SupernovaJS",
  tagline: "The SSR Microframework",
  url: "https://supernova-tool.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "supernova-tool", // Usually your GitHub org/user name.
  projectName: "supernova-site", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SupernovaJS",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/supernova-tool/supernova",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "CLI",
              to: "docs/doc2/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SupernovaJS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/supernova-tool/supernova-site/edit/master/gh-pages/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
