
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Pencil=React.lazy(()=>import("./Pencil"));
export default function render_registration(){

	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Pencil />
  </Suspense>
  < Footer />
  </>

		);
}