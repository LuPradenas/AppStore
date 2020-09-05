import React from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
//pruebo una api diferente para ver si me anda
const dataUrl="https://jsonplaceholder.typicode.com/users";
class ProductsList extends React.Component {
   state = {
	  data:[],
   };

peticonGet=()=>{
	axios.get(dataUrl).then(response =>{
		this.setState({data:response.data});
	}).catch(error=>{
	console.log(error.message);
  })
}
 componentDidMount(){
	 this.peticonGet();
 }
 handleChange=async e=>{
	e.persist();
	await this.setState({
	  form:{
		...this.state.form,
		[e.target.name]: e.target.value
	  }
	});
	console.log(this.state.form);
	}
	
	render() {
	  return (

	  <div className={styles.app}>
	     <button>Agregar Aplicacion</button>
		  {this.state.data.map(empresa=>{
			return(
			<div className={styles.render}>
			<p>{empresa.id}</p>
			<p>{empresa.name}</p>

			<div>
			 <button >Editar</button>
			<button >Eliminar</button>
	        </div>
		 </div>
			)
		  })}
	  </div>

	
	  
	  )
 };
}

export default ProductsList;