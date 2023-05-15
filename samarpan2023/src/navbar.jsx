import render_notification from "./render_noti.js";
import render_invitation from "./render_invitation.js";
import render_winners from "./render_winners.js";

import render_home from "./render_home.js";
import render_registration from "./render_registration.js";
import render_gallery from "./render_gallery.js";
import React from 'react';
import './navbar.css'
// export function close(){
//   document.getElementById("modal").style.display="none";
// }
// export function open(){
//   document.getElementById("modal").style.display="block";
// }
const Navbar = () => {
  return (
    <>
    <div className="w3-xlarge w3-container " id="nav" style={{margin:"auto"}} >
    <img className="w3-small w3-left"  src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/cbit.jpeg?raw=true" alt="Logo"  />
    {/* <button className="w3-right w3-button w3-border w3-border-red w3-hover-blue " onClick={open}>
    <i className="material-icons ">menu</i></button> */}
    <div className=" w3-center w3-hide-small w3-serif"><h2 className="w3-serif cbit">C BYREGOWDA INSTITUTE OF TECHNOLOGY</h2>
    <p id="samarpan" className="">Samarpan-2023</p></div>
    <div className=" w3-center w3-hide-large w3-hide-medium sama ">CBIT<p id="" className="sama">Samarpan-2023</p></div>
    <div className="w3-small"> <marquee onClick={render_notification} ><img alt="loading" className="w3-small w3-image" width={"40px"} src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/announcements_gif.gif?raw=true"/>Notifications</marquee></div> {/* eslint-disable-next-line*/}

    <div className="navflex w3-hide-small  "><p className="w3-bar-item w3-btn  " onClick={render_home}>HOME</p><p className="w3-bar-item w3-btn " onClick={render_invitation}>INVITATION</p><p className="w3-bar-item w3-btn" onClick={render_registration}>EVENTS</p><p className="w3-bar-item w3-btn" onClick={render_winners}>WINNERS</p><p className="w3-bar-item w3-btn" onClick={render_gallery}>GALLERY</p></div>
    <div className="mobile-navflex w3-hide-large w3-hide-medium  "><p className=" w3-btn w3-bar-item  " onClick={render_home}>HOME</p><p className="w3-bar-item w3-btn w3-left" onClick={render_invitation}>INVITATION</p><p className="w3-bar-item w3-btn" onClick={render_registration} >EVENTS</p><p className="w3-bar-item w3-btn" onClick={render_winners}>WINNERS</p><p className="w3-bar-item w3-btn" onClick={render_gallery}>GALLERY</p></div>
    
    
    </div>
    </>
  );
}

export default Navbar;

