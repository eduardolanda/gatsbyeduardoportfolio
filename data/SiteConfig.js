module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "eduardolanda", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Eduardo Landa", // Site title.
  siteTitleAlt: "Eduardo Landa Porfolio", // Alternative site title for SEO.
  siteLogo:
    "https://logoeduardolanda.s3-us-west-2.amazonaws.com/logoeduardo.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "http://www.eduardolanda.ca", // Domain of your website without pathPrefix.
  pathPrefix: "/eduardolanda", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Some nice projects created with ReactJs, GraphQL, GatsbyJS and more!", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Eduardo Landa", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/eduardolanda",
    "https://linkedin.com/in/eduardolanda",
    "mailto:eduardo.landa@outlook.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/eduardolanda",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/eduardolanda",
      iconClassName: "fa fa-linkedin" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:eduardo.landa@outlook.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Eduardo Landa 2019" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
