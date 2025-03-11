// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tango Help Center",
  tagline: "Tango Help Center",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://help.tangoapp.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tango-adb", // Usually your GitHub org/user name.
  projectName: "help-center", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mdx1Compat: {
      admonitions: false,
      comments: false,
      headingIds: false,
    },
    mermaid: true,
  },

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {Record<string, unknown>} */ (
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */ ({
          docsRouteBasePath: "/",
          highlightSearchTermsOnTargetPage: true,
        })
      ),
    ],
  ],

  plugins: [
    /** @type {import("@docusaurus/types").PluginModule} */ (
      () => ({
        name: "unplugin-icons",
        configureWebpack: () => ({
          plugins: [
            require("unplugin-auto-import/webpack").default({
              resolvers: [
                require("unplugin-icons/resolver").default({
                  prefix: "Icon",
                  extension: "jsx",
                }),
              ],
            }),
            require("unplugin-icons/webpack").default({
              autoInstall: true,
              compiler: "jsx",
              jsx: "react",
              scale: 1.6,
              defaultStyle: "display: inline-block; vertical-align: middle",
            }),
          ],
        }),
      })
    ),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/tango-adb/help-center/tree/main/",
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/tango-adb/help-center/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-WLRVJGCF",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Tango",
        logo: {
          alt: "Tango Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Help Center",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/tango-adb/help-center",
            label: "Source code",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "announce-2",
        content:
          '📢 Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/26k3ttC2PN">Discord server</a> to check latest announcements and roadmap!',
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Tango Web App",
                href: "https://app.tangoapp.dev",
              },
              {
                label: "OpenCollective",
                href: "https://opencollective.com/ya-webadb",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/yume-chan/ya-webadb",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/tango_adb",
              },
              {
                label: "Discord",
                href: "https://discord.gg/26k3ttC2PN",
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Tango ADB. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
