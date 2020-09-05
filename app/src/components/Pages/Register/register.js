import React, {Component} from "react";
import MainLogo from "../LogIn/MainLogo";
import styles from "./styles.module.scss";
import axios from 'axios';

const baseUrl="http://localhost:8080/signIn"
class Register extends Component {

  state ={
    form:{
       email:'',
       password:'',
       name: '',
       cliente: '',
       desarrollador: '',
    }
  }

  handleChange = async e => {
    await this.setState ({
       form:{
         ...this.state.form,
         [e.target.name]: e.target.value
       }
    });
    console.log(this.state.form);
 }
  
   signUp = async e =>{
    e.preventDefault();
    let isAdmin = false;

    if (this.state.form.desarrollador) {
      isAdmin = true;
    }

    axios.post(baseUrl, {
      name: this.state.form.name,
      email: this.state.form.email,
      password: this.state.form.password,
      admin : isAdmin
    }, {withCredentials : true})
    .then(function (response) {
      let token = document.cookie;
        let rows = response.data[0];
        return (rows, token);
    })
    .then(function (response) {
      window.location.assign('/SingUp');
    })
    .catch(function (error) {
      console.error(error + ' my error message');
    });
  }

  render (){
    return (
      <div className={styles.Header}>
        <MainLogo />
        <form className={styles.LoginForm} onSubmit={this.signUp}>
        <div className={styles.Field}>
            <label className={styles.Label}>Nombre</label>
            <input
              className={styles.Input}
              type="text"
              placeholder="Nombre Completo"
              required="required"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.Field}>
            <label className={styles.Label}>Correo Electronico</label>
            <input
              className={styles.Input}
              type="email"
              placeholder="Correo Electronico"
              required="required"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.Field}>
            <label className={styles.Label}>Contraseña</label>
            <input
              className={styles.Input}
              type="password"
              placeholder="Contraseña"
              required="required"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className={styles.Label}>Seleccione la seccion</label>
            <select className={styles.Select}>
              <option value="" disabled selected hidden>
              Seleccione la seccion
              </option>
              <option name="cliente" value="cliente" onChange={this.handleChange}>Cliente</option>
              <option name="desarrollador" value="desarrollador" onChange={this.handleChange}>Desarrollador</option>
            </select>
          </div>
          <div className={styles.Group}>
            <button className={styles.button} type="submit">Registrarse </button>
          </div>
        </form>
      </div>
    );
  }
  
};

export default Register;
