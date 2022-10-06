import Home from "./components/Home";
import HomeTwo from "./pages/HomeTwo";
import {theme} from "./pages/theme";
import {ThemeProvider} from '@mui/material/styles';
import Nav from "./pages/Nav";
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Contact from "./pages/Contact";

function App() {
  return (
    //<Home></Home>
      <ThemeProvider theme={theme}>
        <Nav></Nav>
          {/*<HomeTwo></HomeTwo>*/}
          <Routes>
              <Route path='/' element={<HomeTwo></HomeTwo>}></Route>
              <Route path='/HOME' element={<HomeTwo></HomeTwo>}></Route>
              <Route path="/CONTACT" elements={<Contact></Contact>} ></Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
