
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Treasure=React.lazy(()=>import("./Treasure"));
export default function render_treasure(){

	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Treasure />
  </Suspense>
  < Footer />
  </>

		);
}