module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: 'burtons',
      colors: {
        //* dark theme
        'dark-Bar': '#1a1a1a', // darker grey
        // 'dark-Bg': '#1c1c1c', // dark grey
        'dark-Bg': '#131214', // dark grey
        'dark-HighlightFrom': '#06b6d4', // cyan
        'dark-HighlightTo': '#14b8a6', // teal
        //* light theme
        'light-Bar': '#eaf1fe', // darker light
        // 'light-Bg': '#eef4ff', // light
        'light-Bg': '#EAEAEA', // light
        'light-HighlightFrom': '#d63636', // red
        'light-HighlightTo': '#e26654', // orange
        // 'light-HighlightTo': '#cd4040',
      }
    },
  },
  plugins: [],
}