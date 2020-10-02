/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'ShipPalm',
  tagline: 'Marine ERP Solution',
  url: 'https://orange-moss-04e232c00.azurestaticapps.net/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'vishnu-alpha', // Usually your GitHub org/user name.
  projectName: 'ShipPalmDocs', // Usually your repo name.
  plugins: [
    'docusurus-lunr-search',
  ],
  themeConfig: {
    navbar: {
      title: 'ShipPalm',
      logo: {
        alt: 'ShipPalm Documentation Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          // to: 'docs/',
          // activeBasePath: 'docs',
          // to: 'docs/greeting',
          to: '/greeting',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          // to:'docs/releaseNotes/rnote-all',
          to:'/releaseNotes/rnote-all',
          label: 'Release Notes',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Documents',
              to: 'docs/',
            },
            {
              label: 'Blogs',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Website',
              href: 'https://alphaori.sg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AlphaOriGroup',
            },
            {
              label: 'Linkedin',
              href: 'https://in.linkedin.com/company/alpha-ori-holdings-pvt-ltd',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Release Notes',
        //       to: 'docs/releaseNotes/',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://captv89.github.io',
        //     },
        //   ],
        // },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          ],
        },
      ],
      logo: {
        alt: 'Alpha Ori Technologies Logo',
        src: 'img/mainLogo.svg',
        href: 'https://www.alphaori.sg',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Alpha Ori Technologies. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          homePageId: 'greeting',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
