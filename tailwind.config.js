/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        firago: ["BPG Glaho WEB Caps", "sans-serif"],
        // firago: ['FiraGO','BPG Glaho WEB Caps', 'sans-serif'],
        BPG_Mtavruli: ["BPG Glaho WEB Caps", "sans-serif"],
        ninoElite: ["BPG Nino Elite", "sans-serif"],
        ninoMedium: ["BPG Nino Medium", "sans-serif"],
        ninoMtavruli: ["BPG Nino Mtavruli", "sans-serif"],
        ninoMtavruliBold: ["BPG Nino Mtavruli Bold", "sans-serif"],
        ninoMkhedruliBold: ["BPG Nino Mkhedruli Bold", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        black: {
          DEFAULT: "#000000",
          dev: "#282c34",
          bg: "#34373f",

          13: "#15222C",
          16: "#192a37",
          18: "#1c323f",
          26: "#324255",

          10: "rgba(0, 0, 0, .1)",
          20: "rgba(0, 0, 0, .2)",
          30: "rgba(0, 0, 0, .3)",
          50: "rgba(0, 0, 0, .5)",
        },
        white: {
          DEFAULT: "#ffffff",
          10: "rgba(250, 252, 255, 1)",
          20: "rgba(255, 255, 255, .2)",
          30: "rgba(255, 255, 255, .3)",
          40: "rgba(255, 255, 255, .4)",
          50: "rgba(255, 255, 255, .5)",
          60: "rgba(255, 255, 255, .6)",
          80: "rgba(255, 255, 255, .8)",
          92: "rgba(228, 228, 239, 0.44)",
          95: "rgb(243, 245, 248)",
          96: "rgb(244, 244, 244)",
          97: "rgba(246, 250, 255, 1)",
          98: "rgb(250, 249, 249)",
          99: "rgba(252, 252, 252, 1)",
        },
        gray: {
          DEFAULT: "#f2f2f2",
          10: "rgba(253, 253, 253, 1)",
          11: "rgba(195, 205, 221, 0.1)",
          20: "rgba(195, 205, 221, 0.2)",
          22: "rgb(77, 77, 77)",
          30: "rgba(195, 205, 221, 0.3)",
          38: "rgb(80, 100, 113)",
          40: "rgba(128, 128, 128, .4)",
          45: "rgb(115, 115, 115)",
          46: "rgba(255, 255, 255, 0.47)",
          47: "rgb(97, 115, 137)",
          50: "rgba(128, 128, 128, .5)",
          60: "rgba(128, 128, 128, .6)",

          65: "rgba(195, 205, 221, 0.65)",
          70: "rgba(128, 128, 128, .7)",
          80: "rgba(255, 255, 255, 0.80)",
          81: "rgba(204, 204, 204, 1)",
          82: "rgb(195, 205, 221)",
          85: "rgba(217, 217, 217, 1)",
          98: "rgb(246, 250, 255)",
          100: "rgba(128, 128, 128)",
        },
        blue: {
          DEFAULT: "#25304A",
          10: "rgba(102, 165, 249, 1)",
          13: "rgb(21, 34, 44)",
          15: "rgb(2, 36, 77)",
          16: "rgba(25, 42, 55, 1)",
          17: "rgb(30, 45, 56)",
          18: "rgb(28, 50, 63)",
          26: "rgb(50, 66, 85)",
          27: "rgb(35, 63, 100)",
          30: "rgba(95, 114, 155, .3)",
          33: "rgb(54, 80, 113)",
          38: "rgba(37, 48, 74, .38)",
          40: "rgba(39, 93, 163, 1)",
          41: "rgb(86, 114, 133)",
          50: "rgba(37, 48, 74, .5)",
          56: "rgba(46, 130, 240, 1)",
          69: "rgb(102, 165, 249)",
          70: "rgba(95, 114, 155, .7)",
          79: "rgb(152, 194, 249)",
          80: "rgba(2, 36, 77, .8)",
          95: "rgba(237, 240, 245, 1)",
        },
        red: {
          DEFAULT: "rgb(255, 84, 64)",
          HOVER: "rgb(255, 48, 26)",
          10: "rgba(255, 84, 64, 0.1)",
          20: "rgba(255, 84, 64, .2)",
          30: "rgba(255, 84, 64, .3)",
          40: "rgba(255, 84, 64, .4)",
          41: "rgba(184, 20, 48, 1)",
          50: "rgba(255, 84, 64, .5)",
          55: "rgba(232, 46, 76, 1)",
          60: "rgba(255, 84, 64, .6)",
          67: "rgba(255, 87, 114, 1)",
          70: "rgba(255, 84, 64, .7)",
          77: "rgb(255, 136, 147)",
          80: "rgb(255, 153, 163)",
          85: "rgb(228 152 160)",
          90: "rgba(255, 204, 204, 1)",
          91: "rgb(250, 213, 219)",
        },
        green: {
          DEFAULT: "rgb(51, 204, 51)",
          20: "rgb(4, 96, 45)",
          25: "rgba(6, 121, 62, 1)",
          27: "rgba(44, 92, 63, 1)",
          36: "rgba(46, 139, 87, 0.6)",
          37: "rgba(9, 179, 90, 1)",
          45: "rgb(0, 230, 111)",
          46: "rgb(46, 184, 46)",
          60: "rgb(92, 214, 92)",
          71: "rgba(109, 255, 179, 0.8)",
          87: "rgb(206, 240, 222)",
        },
      },
      borderRadius: {
        DEFAULT: "16px",
        0: "0",
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        round: "50%",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      boxShadow: {
        DEFAULT: "0px 8px 16px #00000014",
        none: "0px 0px 0px transparent",
        10: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
        20: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
        30: "0px 0px 4px 0px rgba(0, 0, 0, 0.30)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        lp: "1440px",
        hd: "1920px",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-xs": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "60%": { transform: "rotate(-10deg)" },
          "80%": { transform: "rotate(10deg)" },
          "90%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "bounce-xs-line1": {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(6px)", opacity: 0, width: 0 },
        },
        "bounce-xs-line2": {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(9px)", opacity: 0 },
        },
        bounceIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        // Use your keyframes in animations
        "spin-slow": "spin 7s linear infinite",
        "spin-fast": "spin 3.5s linear infinite",
        bounce: "bounce 2s infinite",
        "bounce-xs": "bounce-xs 2s ease-in-out forwards",
        "bounce-xs-line1": "bounce-xs-line1 0.6s ease-in-out infinite",
        "bounce-xs-line2": "bounce-xs-line2 0.7s ease-in-out infinite",
        bounceIn: "bounceIn 2.5s ease-out 1 alternate",
        bounceOut: "bounceOut 2s infinite",
      },
      swiper: {
        navigationTopOffset: {
          // Define your desired values for --swiper-navigation-top-offset
          0: "0",
          40: "40%",
          45: "45%",
          50: "50%",
          60: "60%",
          70: "70%",
          80: "80%",
          89: "89%",
          90: "90%",
          95: "90.5%",
        },
        navigationSize: {
          18: "18px",
          24: "24px",
        },
      },
    },
  },
  // plugins: [],
  plugins: [
    function ({ addUtilities, theme }) {
      const navigationTopOffset = theme("swiper.navigationTopOffset", {});
      const navigationSize = theme("swiper.navigationSize", {});

      const utilities = {};
      /* --swiper-navigation-top-offset  */
      for (const key in navigationTopOffset) {
        utilities[`.swiper-navigation-top-offset-${key}`] = {
          "--swiper-navigation-top-offset": navigationTopOffset[key],
        };
      }
      /* --swiper-navigation-size  */
      for (const key in navigationSize) {
        utilities[`.swiper-navigation-size-${key}`] = {
          "--swiper-navigation-size": navigationSize[key],
        };
      }

      addUtilities(utilities, {
        variants: ["responsive"],
      });
    },
  ],
};
