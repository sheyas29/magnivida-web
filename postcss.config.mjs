/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},  // <--- Notice: No "@" symbol here. Just "tailwindcss"
    autoprefixer: {},
  },
};

export default config;
