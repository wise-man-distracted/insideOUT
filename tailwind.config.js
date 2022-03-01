module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('gio.jpg')",
        'sec2': "url('section2.jpg')",
        'o1': "url('offer1.jpg')",
        'o2': "url('offer2.jpg')",
        'o3': "url('offer3.jpg')",
        'o4': "url('offer4.jpg')",
        'o5': "url('offer5.jpg')",
        'o6': "url('offer6.jpg')",
        'c1': "url('category1.jpg')",
        'c2': "url('category2.jpg')",
        'c3': "url('category3.jpg')",
        'c4': "url('category4.jpg')",
        'c5': "url('category5.jpg')",
        'c6': "url('category6.jpg')",
      },
      width: {
        '88pc': '88%',
        '96pc': '96%',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '100%',
          },
        }
      })
    }
  ],
};
