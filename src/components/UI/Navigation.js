import React from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <div>
        <h1 className={styles.header}>USER TRACKER</h1>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default Navigation;
