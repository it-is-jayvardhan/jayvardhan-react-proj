
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';

const Home = () => {
  return (<>
    <br /> <br /><br />
    

    <div className="home w3-card w3-resposive w3-container w3-padding-4">

      < br/> 
      <Carousel showThumbs={false}
        autoPlay
        infiniteLoop
        stopOnHover={false}
        showStatus={false}>
        <div className="w3-resposive w3-card">
          <img src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/im1.jpg?raw=true" alt="LOADING" />
          </div>
        <div className="w3-resposive">
        <img src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img6.jpeg?raw=true" alt="LOADING 2"/>
          </div>
        <div className="w3-resposive">
        <img src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img5.jpeg?raw=true" alt="LOADING 3" />
          </div>
        <div className="w3-resposive">
                <img src="https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/gallery-samarpan/img4.jpg?raw=true" alt="LOADING 4" />
          </div>
      </Carousel>


    </div>
          <div className="w3-container w3-hide-large "><br /><br/>
      <br /><br/>
      </div>
    </>
  );
};

export default Home;