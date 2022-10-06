import Home from "./components/Home";
import HomeTwo from "./pages/HomeTwo";
import {theme} from "./pages/theme";
import {ThemeProvider} from '@mui/material/styles';
import Nav from "./pages/Nav";
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Category from "./pages/Category";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";

function App() {
  return (
    //<Home></Home>
      <ThemeProvider theme={theme}>
          <Nav></Nav>
          <Routes>
              <Route path='/' element={<HomeTwo></HomeTwo>}></Route>
              <Route path='/HOME' element={<HomeTwo></HomeTwo>}></Route>
              <Route path='/SHOP' element={<Category></Category>}></Route>
              <Route path='/CONTACT' element={<ContactPage></ContactPage>}></Route>
          </Routes>
          <Footer></Footer>
      </ThemeProvider>
  );
}

export default App;
