const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Navin Navi Personal Website", // Navigation and Site Title
  siteTitleAlt: "Navin Navi", // Alternative Site title for SEO
  siteTitleShort: "Navin Navi", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "https://navin-navi.github.io", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "Navin", // Author for schema.org JSONLD

  siteFBAppID: "576603726168994", // Facebook App ID - Optional
  userTwitter: "@navin_navi19", // Twitter Username
  ogSiteName: "navinnavi19", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-142123747-1",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
