/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px) { ... }

      sm: {'min': '481px', 'max': '768px'},
      // => @media (min-width: 640px) { ... }
      md: {'min': '769px', 'max': '1024px'},  
      // => @media (min-width: 768px) { ... }

      lg: {'min': '1025px', 'max': '1440px'},
      
      // => @media (min-width: 1024px) { ... }
      xl: {'min': '1441px','max': '2500px'},
      // => @media (min-width: 1280px) { ... } 
      xxl: {'min': '2500px','max': '2561px'},    
    },
    extend: {
      colors:{
        'darkBlue': {
          700: '#111827',
          
        },
        'purple':{
          100: '#445268'
        },
        'myGray':{
          200: '#E5E3E3'
        },
        'myGreen':{
          100: "#F3F6E7"
        },
        'myBlack':{
          100: "#1A1A1A"
        },
      },
      fontFamily:{
         body:['Montserrat']
      },
       
    },
  },
  plugins: [],
}
