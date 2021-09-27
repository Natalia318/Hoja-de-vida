
import {
   Link
} from "react-router-dom";
function Home(){

	return(

		<div className="contenedor">
			<h1 className="titulo">Página principal</h1>
			<a className="volver" ><Link to="/portafolio">Ir al portafolio</Link> </a>
			<a className="volver" ><Link to="/portafoliof">Ir ¿</Link> </a>
		</div>
	);
}

export default Home;