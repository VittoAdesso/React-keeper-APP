import React from 'react';
import * as S from './styles';

// paso valores que se generan cuando se crea la nota 
export default function Note({ title, content }) {


  return (
  <div>
        <S.NoteContainer>
            <S.NoteTitle>{title}</S.NoteTitle>
            <S.NoteBody>{content}</S.NoteBody>
        </S.NoteContainer>
  </div>
  );
}
