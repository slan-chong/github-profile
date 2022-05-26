module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          dark: "var(--color-text-dark)",
          "dark-alt": "var(--color-text-dark-alt)",
          light: "var(--color-text-light)",
          "light-alt": "var(--color-text-light-alt)",
          muted: "var(--color-text-muted)",
          success: "var(--color-text-success)",
          info: "var(--color-text-info)",
          warning: "var(--color-text-warning)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          "button-day": "var(--color-button-day)",
          "button-day-hover": "var(--color-button-day-hover)",
          "button-day-active": "var(--color-button-day-active)",
          "button-night": "var(--color-button-night)",
          "button-night-hover": "var(--color-button-night-hover)",
          "button-night-active": "var(--color-button-night-active)",
        },
      },
    },
  },
  plugins: [],
};
