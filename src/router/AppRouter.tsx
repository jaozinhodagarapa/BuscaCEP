import React from "react";


import { 
    BrowserRouter,
    Route,
    Routes } from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";
import Cadastro from "../components/Cadastro";
import Listagem from "../components/Listagem";

    const AppRouter = () => {
        return (
            <BrowserRouter>
                 <Routes>
                    <Route path="buscacep" element={<BuscaCep/>}/>
                    <Route path="Cadastro" element={<Cadastro/>}/>
                    <Route path="Listagem" element={<Listagem/>}/>
                 </Routes>
            </BrowserRouter>
        );
    }

    export default AppRouter