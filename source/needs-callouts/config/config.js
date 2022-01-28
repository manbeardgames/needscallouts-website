/**
 * Object that is loaded into the app.locals variable
 */
module.exports = {
  meta: {
    title: "It's Just Like Normal Mode",
    description:
      "The official website of the It's Just Like Normal Mode FFXIV raid static.",
    author: "Christopher Whitley (https://twitter.com/manbeardgames",
    local: "en-US",
    type: "website",
    url:
      process.env === "development"
        ? "https://localhost:3000"
        : "https://manbeardgames.com/its-just-like-normal-mode",
    siteName: "It's Just Like Normal Mode",
    image: "/image/og-spriggan",
  },
};
