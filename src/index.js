import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeComponent from "./component/HomeComponent";
import Demo from "./component_2/Demo";
import Test from "./component_2/Test";
import HomeStudent from "./student/HomeStudent";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<HomeComponent/>*/}
        {/*<Demo/>*/}
        {/*<Test/>*/}
        <HomeStudent/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
