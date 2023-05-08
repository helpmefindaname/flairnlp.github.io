// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'flair',
  tagline: 'A very simple framework for state-of-the-art Natural Language Processing (NLP)',
  favicon: 'img/flavicon.png',

  // Set the production url of your site here
  url: 'https://helpmefindaname.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'helpmefindaname', // Usually your GitHub org/user name.
  projectName: 'flairnlp.github.io', // Usually your repo name.
  trailingSlash: false,

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/flairNLP/flairnlp.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/flairNLP/flairnlp.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'flair, natural language processing, named entity recognition, blog'}],
      // Replace with your project's social card
      image: 'img/flair_social_card.jpg',
      navbar: {
        title: 'Flair',
        logo: {
          alt: 'My Site Logo',
          src: 'img/flavicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/demo', label: 'Demo', position: 'left'},
          {
            href: 'https://github.com/flairnlp/flair',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/flair',
              },
              {
                label: 'Huggingface',
                href: 'https://huggingface.co/models?library=flair&sort=downloads',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/flairnlp/flair',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Legal / Imprint',
                to: '/contact',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/alan_akbik',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/alan-akbik-9859b1122/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alan Akbik. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
