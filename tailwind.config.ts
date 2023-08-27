/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/preline/dist/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./provider/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-light":
          "linear-gradient(to right, #d9afd9, #c1bbeb, #a8c8f2, #97d2ed, #97d9e1);",
        "gradient-dark":
          "linear-gradient(to right top, #0f2027, #12252c, #152931, #192e37, #1c333c, #1e3741, #213c46, #23404b, #254551, #274957, #2a4e5e, #2c5364)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
