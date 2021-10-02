/** @format */

const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    apiPath: "https://thawing-fortress-03877.herokuapp.com",
    domain: "thawing-fortress-03877",
    revivePath: "https://thawing-fortress-03877.herokuapp.com",
    lockScreen: true,
  },
  production: {
    apiPath: "https://thawing-fortress-03877.herokuapp.com",
    domain: "thawing-fortress-03877",
    revivePath: "https://thawing-fortress-03877.herokuapp.com",
    lockScreen: true,
  },
};
module.exports = config[env];
