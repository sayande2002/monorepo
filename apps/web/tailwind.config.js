const sharedConfig = require("@referrer/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
};
