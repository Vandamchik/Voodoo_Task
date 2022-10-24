import React from 'react';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import  Cart  from "./Cart";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";


export default function App(): JSX.Element {

  return (
    <>
        <ShoppingCartProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={ <FirstPage /> } />
                <Route path="/second" element={ <SecondPage /> } />
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </ShoppingCartProvider>
    </>
  );
}


