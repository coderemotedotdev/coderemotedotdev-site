/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#8352d1", // "rgb(99, 102, 241)",
        customSecondary: "#E3D7FC", // "rgb(161, 163, 247)",
        customDarkBg1: "rgb(31, 32, 35)",
        customDarkBg2: "rgb(38, 39, 43)",
        customDarkBg3: "rgb(48, 49, 54)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)"  
        // koingarooLavender: "#E3D7FC",
        // koingarooLightLavender: "#F2EBFF",
        // koingarooDarkLavender: "#8E7EAC", //'#716B7E",
        // koingarooGrayedLavender: "rgb(187,169,198)",
        // koingarooTurquoise: "rgb(119,204,255)",
        // koingarooPurple: "#8352D1",
        // koingarooMedPurple: "#713ACB",
        // koingarooAccentPurple: "#6832BD",
        // koingarooLightGray: "#E2E8F0",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};

