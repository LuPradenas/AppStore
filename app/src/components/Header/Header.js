import React from "react";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.gridContainer}>
        <div className={styles.gc1}>
          <div className={styles.grid}>
            <div className={styles.upperheadline}>
              {" "}
              <p>APP DESTACADA</p>
            </div>
            <div className={styles.headline}>
              <p> Organiza y recuerda tus tareas!</p>
            </div>
            <div className={styles.content}></div>
          </div>
          <div className={styles.grid2}>
            <div className={styles.upperheadline}>
              {" "}
              <p>ESTRENO MUNDIAL</p>
            </div>
            <div className={styles.headline}>
              <p>LA MEJOR APP DEL DIA!</p>
            </div>
            <div className={styles.content}></div>
          </div>
        </div>
      </div>
      <hr></hr>
    </header>

  );
}

export default Header;
