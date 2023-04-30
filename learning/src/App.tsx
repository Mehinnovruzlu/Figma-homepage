import React from "react";
import { Route } from "react-router";
import { Router } from "react-router-dom";
import "./App.scss";
import { Footer } from "./Footer";
import Header from "./Header";
import { ClassBook } from "./pages/ClassBook/ClassBook";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
         <Routes>
        <Route path "/" element= {<HomePage />} />
        <Route path "class-book" element ={ <ClassBook />} />
        <Route path "login" element ={ <LoginPage/> } />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
