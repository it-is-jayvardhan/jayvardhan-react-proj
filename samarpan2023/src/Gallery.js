import { gallery_data } from  "./data_gallery.js";
// import {lazy_load} from "./lazy_load_img.js";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import  gallery_data from "https://cdn.jsdelivr.net/gh/it-is-jayvardhan/jay-projects@main/data_gallery.js";
import "./gallery.css";
const gallery=gallery_data.map(gallery_data=>
	<div>
			
		<div className="first w3-card w3-padding-32 w3-container">
		<img className="w3-image  w3-center" src={gallery_data.link} alt="loading "  />
		
		</div>
		<br /> < br />
		</div>
				

		);
export default function Gallery(){
	return(	<>	<div className="w3-container w3-center  w3-padding-16">
		<h1>GALLERY</h1>
		<br /> < br />
		{gallery}
		</div>
		</>
	);
}