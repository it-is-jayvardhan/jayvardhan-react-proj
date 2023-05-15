
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Events=React.lazy(()=>import("./events.jsx"));
export default function render_event(){

	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Events />
  </Suspense>
  < Footer />
  </>

		);
}