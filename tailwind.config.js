// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // ✅ App router
    "./pages/**/*.{js,ts,jsx,tsx}",      // (optional, যদি pages dir থাকে)
    "./components/**/*.{js,ts,jsx,tsx}", // তোমার কম্পোনেন্ট ফোল্ডার
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ এখানে DaisyUI plugin দাও
}
