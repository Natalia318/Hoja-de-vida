import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

import {
	Link
 } from "react-router-dom";

function Portafolio(){
    return(
        
        
        <div>
             
      
        
        <div>
        <a className="volver" ><Link to="/">Volver</Link> </a>  
        </div>
        <div className="container">
        
            <Header/>
            <section id="informacion">
                <Contact />
               
            </section>
            <Footer />
      </div>
      </div>
      
    );
}

export default Portafolio;