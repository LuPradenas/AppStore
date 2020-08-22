import React from "react";
import MainLogo from "../LogIn/MainLogo";
import styles from "./styles.module.scss";

const Register = () => {
  return (
    <div className={styles.Header}>
      <MainLogo />
      <form className={styles.LoginForm}>
        <div className={styles.Field}>
          <label className={styles.Label}>Correo Electronico</label>
          <input
            className={styles.Input}
            type="email"
            placeholder="Correo Electronico"
            required="required"
          />
        </div>
        <div className={styles.Field}>
          <label className={styles.Label}>Contraseña</label>
          <input
            className={styles.Input}
            type="password"
            placeholder="Contraseña"
            required="required"
          />
        </div>
        <div className={styles.Field}>
          <label className={styles.Label}>Repetir Contraseña</label>
          <input
            className={styles.Input}
            type="password"
            placeholder="Contraseña"
            required="required"
          />
        </div>
        <div>
          <label className={styles.Label}>Seleccione la seccion</label>
          <select className={styles.Select}>
            <option value="" disabled selected hidden>
            Seleccione la seccion
            </option>
            <option value="">Cliente</option>
            <option value="">Desarrollador</option>
          </select>
        </div>
        <div className={styles.Group}>
          <button className={styles.button}>Registrarse </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
