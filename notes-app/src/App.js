import NavBar from './components/NavBar/NavBar'; 
import theme from './theme/theme'; 

// para usar thme importo varios cosas
 import { ThemeProvider } from 'styled-components'; 
import Header from './components/Header/Header';


function App() {
  return (
    <ThemeProvider theme= { theme }>
      <NavBar />
      <Header />
    </ThemeProvider>
  );
}

export default App;
