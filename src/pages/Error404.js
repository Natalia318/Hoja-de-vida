import {
	Link
 } from "react-router-dom";
  function Error404() {
	return(

		<div>
			<div>
			
			<a className="btn btn-primary" ><Link to="/">Volver</Link> </a>
			
		</div>
			<img className="error" src="https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg"></img>
		
		</div>
		);
}

export default Error404;