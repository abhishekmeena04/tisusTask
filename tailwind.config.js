export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropdown: {
        ".dropdown": {
          display: "inline-block", // Adjust as needed
        },
        ".dropdown-select": {
          padding: "0.5rem 1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          // Add more styles as desired
        },
      },
    },
  },
  plugins: [],
};
