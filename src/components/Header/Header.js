import React from 'react';
import * as S from "./styles";
import "./style.css";
import { useTheme, useThemeUpdate } from "../ThemeContext/ThemeContext";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness3Icon from "@mui/icons-material/Brightness3";

export default function Header() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#202124" : "#eee",
    border: darkTheme && "solid 1px #eee",
  }

  return (
       <S.Header style={themeStyles}>
         <S.Title>Keeper</S.Title>
         <div onClick={toggleTheme}>
            {darkTheme ? (
              <Brightness4Icon fontSize='large' sx={{ color: "white" }}/>
            ) : (
              <Brightness3Icon fontSize='large' sx={{ color: "white" }}/>
            )}
         </div>
       </S.Header>
  );
}
