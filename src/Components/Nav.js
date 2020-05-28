import React from "react";
import style from "./nav.module.css";

const Nav = (props) => {
  return (
    <div className={style.nav}>
      <h3>
        <strong>Movie Listener</strong>
      </h3>
      <h3>The best Website to find movies</h3>
    </div>
  );
};

export default Nav;
