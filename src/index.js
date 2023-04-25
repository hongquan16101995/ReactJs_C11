import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BaiThucHanh1 from "./BaiThucHanh1";

const root = ReactDOM.createRoot(document.getElementById('root'));


const hello = React.createElement("h1",
    {id: "text", className: "title"},
    "Hello")
root.render(
    <React.StrictMode>
      <App/>
        <BaiThucHanh1/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
