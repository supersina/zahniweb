import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './pages/home';
import { KontaktPage } from './pages/kontakt';
import { PraxisPage } from './pages/praxis';
import { Leistung } from './pages/leistung';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { extendedTheme } from './theme/theme';

function App() {
  const resolvePage = () => {
    if (window.location.pathname.includes('/leistungen')) {
      return <Leistung />;
    }

    if (window.location.pathname === '/praxis') {
      return <PraxisPage />;
    }
    if (window.location.pathname === '/kontakt') {
      return <KontaktPage />;
    } else {
      return <HomePage />;
    }
  };
  return (
    <ChakraProvider theme={extendedTheme}>
      <Navbar />
      {resolvePage()}

      <Footer />
    </ChakraProvider>
  );
}

export default App;
