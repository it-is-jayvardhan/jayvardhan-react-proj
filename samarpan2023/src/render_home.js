import Footer from "./footer/Footer.js";

import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Home=React.lazy(()=>import("./home"));
export default function render_home(){

	root.render(
		<>
		< Navbar />
	<Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
  <Footer />
  </>

		);
}