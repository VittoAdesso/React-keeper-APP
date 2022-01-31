import React from 'react';
// import { Title } from './styles';
import * as S from './styles';  // lo coloco así, en caso de que tenga muchos estilos, y así importod * todo como name 
import "./styles.css";
// improto de themecontext, y uso llaves, ya qe ya han sido creadas 
import { useTheme, useThemeUpdate } from '../ThemeContext/ThemeContext';


//los he sacado de mui libreria que me los da ya por defecto
import Brightness6Icon from '@mui/icons-material/Brightness6';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

// el retunr siempre va entr e ()
 /* /* importo los esrtilos, y los uso como etiqutas, dentro es dond ele meto los textos  */
 /* los llamo con la s porque así lo improté  */
export default function Header() {

   // creo una variable con nombres de themecontext para llamarles 
   const darktheme = useTheme(); 
   const toggleTheme = useThemeUpdate(); 

   // creo obj con cód css

   const themeStyles = {
      backgroundColor: darktheme ? "#202124" : "#eee", 
      border: darktheme && 'solid 1px #eee'
   }

  return (
// quito el div para que me envuelva todo 
 // llamo a cada const de styles OJO DE HEADER con el s. y nombre  
 
    <header style = { themeStyles }>
       <S.Title>Keeper</S.Title>
       <div onClick ={toggleTheme}>
       {/* ternario  */}

         { darktheme ? (
            <Brightness6Icon fontSize= 'large' sx={{ color : ' white'}}/>
        ) : 
        (
              /* sx estilos personalizados  */
         <NightlightRoundIcon fontSize= 'large' sx={{ color : ' white'}} />
        )}
    
       </div>
    </header>
     
);
}
