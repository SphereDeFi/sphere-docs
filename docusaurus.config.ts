import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Sphere Docs",
  tagline: "The S&P 500 of Crypto",
  favicon: "img/sphere-icon.png",

  // Set the production url of your site here
  url: "https://docs.sphere.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SphereDeFi", // Usually your GitHub org/user name.
  projectName: "sphere-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "3F36J3AKUM",

      // Public API key: it is safe to commit it
      apiKey: "4a5ab78612140f7089edd1d9c406cb48",

      indexName: "sphere",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "og:title",
        content: "Sphere Finance | The S&P 500 of Crypto",
      },
      {
        name: "og:description",
        content: "Store of value with forced appreciation. Holders of the Sphere token enjoy exposure to a diversified portfolio of cryptocurrency projects.",
      },
      {
        name: "twitter:description",
        content: "Store of value with forced appreciation. Holders of the Sphere token enjoy exposure to a diversified portfolio of cryptocurrency projects.",
      },
      {
        name: "og:image",
        content: "img/sphere-og.png",
      },
      {
        name: "twitter:image",
        content: "img/sphere-og.png",
      },
    ],
    // metadata: [
    //   {name: 'keywords', content: 'cooking, blog'},
    //   {name: 'twitter:card', content: 'summary_large_image'},
    // ],
    // Replace with your project's social card
    image: "img/sphere-og.png",
    navbar: {
      title: "Sphere",
      logo: {
        alt: "Sphere logo",
        src: "img/sphere-icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        // {
        //   title: "Developers",
        //   items: [
        //     {
        //       label: "Feedback",
        //       href: "https://forms.gle/13XtjmkwdXQ2jMn26",
        //     },
        //     {
        //       label: "Bug Bounty",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md",
        //     },
        //     {
        //       label: "#dev-chat",
        //       href: "https://discord.com/invite/uniswap",
        //     },
        //     {
        //       label: "Whitepaper",
        //       href: "https://uniswap.org/whitepaper-v3.pdf",
        //     },
        //   ],
        // },
        // {
        //   title: "Github",
        //   items: [
        //     {
        //       label: "uniswap-v3-core",
        //       href: "https://github.com/Uniswap/uniswap-v3-core",
        //     },
        //     {
        //       label: "uniswap-v3-sdk",
        //       href: "https://github.com/Uniswap/uniswap-v3-sdk",
        //     },
        //     {
        //       label: "uniswap-v3-periphery",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery",
        //     },
        //     {
        //       label: "Deployment addresses",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md",
        //     },
        //   ],
        // },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://preon.finance/",
            },
            {
              label: "App",
              href: "https://app.preon.finance/",
            },
            // {
            //   label: "Analytics",
            //   href: "https://info.uniswap.org/home",
            // },
            // {
            //   label: "Token Lists",
            //   href: "https://tokenlists.org/",
            // },
            {
              label: "Brand Assets",
              href: "/docs/Information/Brand%20Assets",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Governance",
            //   href: "https://gov.uniswap.org/",
            // },
            {
              label: "Discord",
              href: "https://discord.gg/spheredefi",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/SphereDeFi",
            },
            {
              label: "Blog",
              href: "https://sphere.finance/blog",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Preon`,
    },
    prism: {
      theme: prismThemes.dracula,
      // theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
