import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className={styles.site}>
        <nav className={styles.nav}>
          <div className={styles.navtitle}>AppStore</div>
          <ul>
            <li className={styles.navitem}>
              Categorias
              <ol>
                <li>
                  <Link to="/" className={styles.a}>
                    Navegadores
                  </Link>
                </li>
                <li>
                  <Link to="/" className={styles.a}>
                    Entretenimiento
                  </Link>
                </li>
                <li>
                  <Link to="/" className={styles.a}>
                    Juegos
                  </Link>
                </li>
                <li>
                  <Link to="/" className={styles.a}>
                    Salud
                  </Link>
                </li>
              </ol>
            </li>

            <li className={styles.navitem}>
              <Link to="/Cart" className={styles.a}>Carrito</Link>
            </li>
            <li className={styles.navitem}>Cerrar Sesion</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
