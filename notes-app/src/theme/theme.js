// aquí vamos a personalizar lo que quiera de la app, puedo creear tipo variables como hacía en saas

const theme = {
          pallete : {
              primary: "#03045e",
              lightblue: "#0077be6", 
              yellow: "#ee9b00"
          }, 
          // tamaño de tipografía
          scale: {
              h1: "3rem",          }
 }

// // lo exporto para llevarlo a otro componente 
export default theme; 

// ahora me lo llevo a app.js para darle estilos específicos y reutilizarlo 