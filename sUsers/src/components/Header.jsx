import React from "react";
import Styles from "../styles/Header.Module.css";
function Header({ forms }) {
  return (
    <header>
      <div className="container">
        <h1>C Users</h1>
        <span className={Styles.map}>
          {forms.length < 1 ? "No users" : `Users ${forms.length}`}
        </span>
      </div>
    </header>
  );
}

export default Header;
