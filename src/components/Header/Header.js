import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>GREEN PENGUIN</h1>
      </Link>
    </div>
  );
}

export default Header;
