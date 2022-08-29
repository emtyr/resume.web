module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        gib: 'gibberish',
      },
      backgroundColor: {
        'experience-section': '#00BDBD',
      },
      backgroundImage: {
        timeline: 'url(public/images/timeline.png)',
        divider: 'url(public/images/bg1.jpg)',
        hero: 'url(public/images/hero.jpg)',
      },
      width: {
        66: '16.5rem',
      },
      height: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};
