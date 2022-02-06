import React, { useState } from 'react';
// import * as S from './styles'; así tb puedo importarlo
import { InputTitle , Formulario, IconContainer } from './styles'; 
import { useTheme } from '../ThemeContext/ThemeContext';

// importo de material ui para el boton que agreagaá las notas 
import Fab from "@mui/material/Fab"; 
import AddIcon from "@mui/icons-material/Add"; 

export default function CreateArea( { addNote } ) {

    const [ noteText, setNoteText] = useState ({
        titlle: "",
        content: ""
    })

    const darktheme = useTheme(); 

    // creo función para que me escriba y admita cambios 
    const handleChange = (event) => {

            const { name, value } = event.target; 

            setNoteText(prevValue => ({
                ...prevValue, 
                [name] : value,
            }))
            ; 
    }


    const handleClick = (event) => {

        event.preventDefault(); // para que no refresque pag
        addNote(noteText); 
        // que me agregue nuevamente una nota a su estado original 
        setNoteText({
            titlle: "",
            content: ""
        }); 

    }

    const { title, content } = noteText; 

    // creo variables que pondré en stilos de acuerdo al cambio de tema 
    const formStyles = {

        backgroundColor: darktheme ? "#202124" : "#fff", 
        border: darktheme && "solid 1px #eee", 
    }

    const inputStyles = {

        backgroundColor: darktheme ? "#202124" : "#fff", 
        border: darktheme && "solid 1px #eee", 
        color: darktheme ? "#eee" : "black"

    }

    return (
    <div>
            <Formulario style={formStyles}>
                <InputTitle 
                name='title'
                type='text'
                value={title}
                style={inputStyles}
                onChange={handleChange} / >
                <InputTitle
                name='content'
                value={content}
                type='text'
                style={inputStyles}
                onChange={handleChange} / >
                <IconContainer>
                <Fab
                  onClick={handleClick}
                    >
                    <AddIcon />
                </Fab>
                </IconContainer>
            </Formulario>
            
    </div>);
}
