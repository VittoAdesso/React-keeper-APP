import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import { MyThemeProvider } from "./components/ThemeContext/ThemeContext";

import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
//import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <MyThemeProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </MyThemeProvider>
    </div>
  );
}

export default App;
