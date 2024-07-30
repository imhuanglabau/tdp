import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from './infrastructure/routing/routes';


const theme = extendTheme({
  fonts: {
    body: "'Noto Sans TC', sans-serif",
    heading: "'Noto Sans TC', sans-serif",
  },
})
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;