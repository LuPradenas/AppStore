import React from "react";
import MainLogo from "./MainLogo";
import styles from "./styles.module.scss";

const Login = () => {
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
        <div className={styles.Group}>
          <button className={styles.button}>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
