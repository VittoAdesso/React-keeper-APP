// importo estilos de librería 
import styled from 'styled-components'; 

export const NoteContainer = styled.div
`
        background: #fff; 
        border-radius: 7px;
        box-shadow: 0 2px 5px #ccc; 
        padding: 10px;
        width: 300px; 
        margin: 16px; 
        float:  left; 
`; 

export const NoteTitle = styled.h3
`   font-size: 1.1em; 
    margin-botton: 6px; 
`; 

export const NoteBody = styled.p
`
    font-size: 1.1em; 
    margin-boton: 10px; 
    white-space: pre-wrap; 
    word-wrap: break-word;
`; 
