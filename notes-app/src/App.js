// import NavBar from './components/NavBar/NavBar'; 
import Header from './components/Header/Header';
import theme from './theme/theme'; 
import  GlobalStyle from './theme/global';
// import Button from './components/Button/Button';

// para usar thme importo varios cosas
 import { ThemeProvider } from 'styled-components'; 


// siempre dentro de un div 
function App() {
  return (
    <div>
  
  {/* estilo global de theme, para que no tenga márgenes la pag */}
    <GlobalStyle /> 
    <ThemeProvider theme= { theme }>
      <Header />
    </ThemeProvider>
    
    </div>
  );
}

export default App;


/* <NavBar /> */