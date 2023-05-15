
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Invitation=React.lazy(()=>import("./Invitation.js"));
export default function render_invitation(){

	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Invitation />
  </Suspense>
  < Footer />
  </>

		);
}