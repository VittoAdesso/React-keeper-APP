import React, {useState, useEffect, useContext} from 'react';


// creo diferentes contextos de react, para lueho bajorlos y usar llos childrem, que me ayudará a trasmitir info a varios componente s, que luego le paso como value abajo en cada componente 

// 3era fase
export const ThemeContext = React.createContext(); 
export const ThemeUpdateContext = React.createContext(); 


// 4ta fase improot hook, con use delante ya avisamos que es un hook us+name 

export const useTheme = () => {
    // devuelve 
        return useContext(ThemeContext); 
}

export const useThemeUpdate = () => {
      // devuelve 
    return useContext(ThemeUpdateContext); 
}


// 1 era fase
export default function ThemeProvider(children) {

    // AQUÍ SIEMPRE LAS FUNCIONALIDADES 
    const [ darktheme, setDarkTheme] = useState(false);  //trabajo con booleanos, para trabajar como interrupot off on 

    //uso usefecet, quiero cambiar el color del tema y del body completo .--- efecto secundario que se deriva del dark o light 
    useEffect(() => {

            document.body.style.backgroundColor = darktheme ? "#202124" : "#eee";  // si es da color, sino da el otro
    }, [darktheme]); 

    const toggleTheme = () => {

        // cuando uses ese tema, sino es el valor inicial, cámbialo
        setDarkTheme((prevDarkTheme) => !prevDarkTheme)
    } 

  return (
//2 da fase
    <ThemeContext.Provider value={darktheme}>

        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>

    </ThemeContext.Provider>

  );
}
