import contributors from './contributors.json';

export const siteMetadata = {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
  siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  garden: {
    basePath: '/garden',
  },
  feed: {
    basePath: `/page`,
    useIndex: true,
    notesPerPage: 10,
  },
  contributors,
};

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `garden`,
      path: `${__dirname}/src/garden/notes`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `gardenFiles`,
      path: `${__dirname}/src/garden/Files`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            offsetY: `500`,
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            // className: `custom-class`,
            // maintainCase: true,
            // removeAccents: true,
            isIconAfterHeader: false,
            // elements: [`h1`, `h4`],
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
            prompt: {
              user: 'root',
              host: 'localhost',
              global: false,
            },
          },
        },
        {
          resolve: `gatsby-remark-classes`,
          options: {
            classMap: {
              // h1
              'heading[depth=1]': 'font-bold text-3xl text-neutral-200',
              // h2
              'heading[depth=2]': 'font-semibold text-2xl  text-neutral-200',
              // h3
              'heading[depth=3]': 'font-semibold text-xl text-neutral-200',
              // h4
              'heading[depth=4]': 'font-semibold text-base text-neutral-200',
              // h5
              'heading[depth=5]': 'font-semibold text-sm text-neutral-200',
              // h6
              'heading[depth=6]': 'font-semibold text-xs text-neutral-200',
              // p
              paragraph: 'text-base font-normal text-neutral-200',
              // a
              link: 'text-primary text-sm font-normal hover:underline active:text-primary-dark',
              // table
              table: 'text-base font-normal text-neutral-200 border border-brand-grey',
              tableCell: 'border border-brand-grey py-1 px-2',
              'tableRow:first-child > tableCell': 'text-primary font-semibold',
              // strong
              strong: 'font-bold',
              // blockquote
              blockquote: 'border-l-2 border-brand-yellow pl-6',
              'blockquote > paragraph': 'text-base text-neutral-400 font-medium',
              'blockquote > blockquote': 'ml-6 mt-6',
              // img
              image: 'w-full rounded-lg',
              // ul
              'list[ordered=false]': 'ml-5 list-disc text-base font-normal text-neutral-200 marker:text-primary',
              // ol
              'list[ordered=true]': 'ml-5 list-decimal text-base font-normal text-neutral-200 marker:text-primary',
            },
          },
        },
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: '/',
      background_color: `#663399`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
  },
  `gatsby-plugin-postcss`,
];
