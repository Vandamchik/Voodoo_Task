import React from 'react';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";


export default function App(): JSX.Element {

  return (
    <>
        <Navigation />
        <Routes>
            <Route path="/" element={ <FirstPage /> } />
            <Route path="/second" element={ <SecondPage /> } />
        </Routes>
    </>
  );
}


