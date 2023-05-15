
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Gallery=React.lazy(()=>import("./Gallery.js"));
export default function render_gallery(){
	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Gallery />
  </Suspense>
  < Footer />
  </>

		);
}