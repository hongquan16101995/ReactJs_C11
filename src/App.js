import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import FormStudent from "./student/FormStudent";
import HomeStudent from "./student/HomeStudent";
import Nav from "./student/Nav";
import Seller from "./btvn/Seller";
import Login from "./btvn/Login";

function App() {
    return (
        <>
            {/*<Nav/>*/}
            <Routes>
                <Route path={"/create"} element={<FormStudent/>}></Route>
                <Route path={"/homeS"} element={<HomeStudent/>}></Route>
                <Route path={"/home"} element={<Seller/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
            </Routes>
        </>
    );
}

export default App;
