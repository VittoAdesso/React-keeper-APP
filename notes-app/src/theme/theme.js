// aquí vamos a personalizar lo que quiera de la app, puedo creear tipo variables como hacía en saas

// createTheme de material si lo quiero hacer con maetrual style

import { createTheme } from "@mui/material";

const theme = createTheme ({ 
    // le doy las propiedades 
    // se parece mucho a vue.js

    fonts: {
        primary: "Roboto",
    }, 
    palette: {
        primary: {
            main:"green",
            lightBlue: "red",
        }
}}
)

// lo exporto para llevarlo a otro componente 
export default theme; 

// ahora me lo llevo a app.js para darle estilos específicos y reutilizarlo 