import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../LogIn/MainLogo";
import styles from './styles.module.scss';

const home = () => {
  return (
    <div>
      <div className={styles.Header}>
        <MainLogo/>
        <p className={styles.subtitle}>Bienvenido a la página de inicio de sesión</p>
        <div className={styles.register}>
          <Link to="/Register" className={styles.button}> Registrarse </Link>
          <Link to="/SingUp" className={styles.button}> Iniciar sesión </Link>
        </div>
      </div>
    </div>
  );
};

export default home;
