module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(import.meta.env.PROD ? { cssnano: {} } : {})
  }
};
