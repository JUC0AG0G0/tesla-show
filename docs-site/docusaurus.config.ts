import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://JUC0AG0G0.github.io',
  baseUrl: process.env.BASE_URL || '/tesla-show/',
  organizationName: 'JUC0AG0G0',
  projectName: 'tesla-show',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/JUC0AG0G0/tesla-show/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Light show editor',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Quickstart',
        },
        {
          href: 'https://github.com/JUC0AG0G0/tesla-show',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://JUC0AG0G0.github.io/tesla-show/dev/',
          label: 'Preview (dev)',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JUC0AG0G0/tesla-show',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tesla Light Show Editor, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
