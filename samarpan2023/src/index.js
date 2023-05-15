import "./firebase.js";
// import Footer from "./footer/Footer.js";
// import Navbar from "./navbar.jsx";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
const App=React.lazy(()=>import("./App.js"));
const Navbar=React.lazy(()=>import("./navbar.jsx"));
const Footer=React.lazy(()=>import("./footer/Footer.js"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
	<Suspense fallback={<Loading />}>
	< Navbar />
	<Suspense fallback={<Loading />}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  < Footer />
  </Suspense>
    </Suspense>
</>
);
export default root;