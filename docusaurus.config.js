// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tango Help Center',
  tagline: 'Tango Help Center',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://tango-adb.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/help-center/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tango-adb', // Usually your GitHub org/user name.
  projectName: 'help-center', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tango-adb/help-center/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tango-adb/help-center/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Tango',
        logo: {
          alt: 'Tango Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: 'left',
            label: 'Help Center',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/tango-adb/help-center',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
