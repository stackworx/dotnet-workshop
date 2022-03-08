module.exports = {
  title: ".NET Workshop",
  tagline: "Introduction to the basics of .NET for Developers",
  url: "https://stackworx.github.io/",
  baseUrl: "/dotnet-workshop/",
  favicon: "img/favicon.ico",
  organizationName: "stackworx",
  projectName: "dotnet-workshop",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: ".NET Workshop",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/requirements",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stackworx/dotnet-workshop",
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
              label: ".NET",
              to: "https://dotnet.microsoft.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              to: "https://stackworx.io/",
            },
            {
              label: "GitHub",
              href: "https://github.com/stackworx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} K8s Workshop, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/stackworx/dotnet-workshop/edit/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
