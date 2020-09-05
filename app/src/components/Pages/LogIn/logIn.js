import React, { Component } from "react";
import MainLogo from "./MainLogo";
import styles from "./styles.module.scss";
import axios from 'axios';

const baseUrl="http://localhost:8080/login"

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
   // no se  recargue la pagina
     iniciarSesion = async e =>{
      e.preventDefault();

      axios.post(baseUrl, {
        email: this.state.form.email,
        password: this.state.form.password,
      }, {withCredentials : true})
      .then(function (response) {
        let token = document.cookie;
        let rows = response.data[0];
        return (rows, token);
      })
      //funcion que si coincide con la base de datos te redirecciona a  tienda
      .then(function (response) {
        window.location.assign('/Store');
      })
      .catch(function (error) {
        console.error(error + ' my error message');
      });
    }

render() {
  
  return (
    
    <div className={styles.Header}>
      <MainLogo />
      <form className={styles.LoginForm} onSubmit={this.iniciarSesion}>
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
          <button className={styles.button} type="submit"> Ingresar </button>
        </div>
      </form>
    </div>
  );
}
}

export default Login;

