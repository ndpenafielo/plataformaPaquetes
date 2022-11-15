import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./components/New";

const Router = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<New/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router;
