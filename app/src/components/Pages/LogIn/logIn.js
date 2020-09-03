import React, { Component } from "react";
import MainLogo from "./MainLogo";
import styles from "./styles.module.scss";
import axios from 'axios';
//import Cookies from 'universal-cookie';
//poner la ruta de mia
const baseUrl="http://http://localhost:3001/usuarios"

class Login extends Component {
  state ={
      form:{
         email:'',
         password:''
      }
    }
    //metodo para capturar lo que el usurario escribe en los inputs
     handleChange = async e => {
        await this.setState ({
           form:{
             ...this.state.form,
             [e.target.name]: e.target.value
           }
        });
        console.log(this.state.form);
     }

     iniciarSesion = async e=>{
    await axios.get(baseUrl,{params: {email: this.state.form.email, password:this.state.form.password}})
.then(response=>{
  return response.data;
})
.then(response=>{
  if(response.length>0){
     // var respuesta=response[0];
  }else{
    alert('El email o la contraseña no son correctas');
  }
})
.cath(error=>{
  console.log(error);
})
     }
render() {
  return (
    <div className={styles.Header}>
      <MainLogo />
      <form className={styles.LoginForm}>
        <div className={styles.Field}>
          <label className={styles.Label}> Correo Electronico </label>
          <input
            name="email"
            className={styles.Input}
            type="email"
            placeholder="Correo Electronico"
            required="required"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.Field}>
          <label className={styles.Label}> Contraseña </label>
          <input
            className={styles.Input}
            type="password"
            placeholder="Contraseña"
            required="required"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.Group}>
          <button className={styles.button} onClick={()=>this.iniciarSesion()}> Ingresar </button>
        </div>
      </form>
    </div>
  );
}
}

export default Login;

