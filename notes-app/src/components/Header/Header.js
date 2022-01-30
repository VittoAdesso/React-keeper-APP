import React from 'react';
// import { Title } from './styles';
import * as S from './styles';  // lo coloco así, en caso de que tenga muchos estilos, y así importod * todo como name 
// el retunr siempre va entr e ()

 /* /* importo los esrtilos, y los uso como etiqutas, dentro es dond ele meto los textos  */

 /* los llamo con la s porque así lo improté  */
export default function Header() {
  return (
  <div>

    <S.Title> Holaaaa </S.Title>

  </div>
  );
}
