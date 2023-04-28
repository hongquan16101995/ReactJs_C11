import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import FormStudent from "./student/FormStudent";
import HomeStudent from "./student/HomeStudent";
import Nav from "./student/Nav";

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path={"/create"} element={<FormStudent/>}></Route>
                <Route path={"/"} element={<HomeStudent/>}></Route>
            </Routes>
        </>
    );
}

export default App;
