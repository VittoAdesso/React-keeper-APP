import React from 'react';
// import { Title } from './styles';
import * as S from './styles';  // lo coloco así, en caso de que tenga muchos estilos, y así importod * todo como name 

//los he sacado de mui libreria que me los da ya por defecto
import Brightness6Icon from '@mui/icons-material/Brightness6';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';


// el retunr siempre va entr e ()

 /* /* importo los esrtilos, y los uso como etiqutas, dentro es dond ele meto los textos  */

 /* los llamo con la s porque así lo improté  */
export default function Header() {
  return (

// quito el div para que me envuelva todo 
    <S.Header>
       <S.Title>Keeper</S.Title>
       {/* sx estilos personalizados  */}
       <NightlightRoundIcon fontSize= 'large' sx={{ color : ' white'}} />
    </S.Header>
   
  
 // llamo a cada const de styles OJO DE HEADER con el s. y nombre  

);
}
