import styled from 'styled-components'; 

export const InputTitle = styled.input 
`
        width: 100%; 
        border: none; 
        padding: 4px; 
        outline: none;
        font-size: 1.2em; 
        font-family: inherit; 
        resize: none;
`
; 

export const Formulario = styled.form
`
        position: relative;
        width: 480px; 
        margin: 30px auto 20px auto; 
        background: #fff; 
        padding: 15px; 
        border-radius: 7px; 
        box-shadow: 0 1px 5px rgb(138, 137, 137); 

`
; 

export const IconContainer = styled.div`
    position: absolute;
    left: 440px;
    bottom: -30px;
    cursor: pointer;
`;