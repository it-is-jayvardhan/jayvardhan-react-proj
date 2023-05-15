import "./loading.css";
import RingLoader from "react-spinners/RingLoader";
function Loading() {
  return (
    <div className="loading w3-jumbo">
	<RingLoader color="#36d7b7" size={150} aria-label="loading"/>
	<h1 className="w3-serif w3-text-white"><strong>Loading ....</strong></h1>
    </div>
  );
}

export default Loading;
