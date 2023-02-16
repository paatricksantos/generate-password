import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import Global from './styles/global';
import theme from './styles/themes/Default';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Global />
    </ThemeProvider>
  );
}

export default App;
