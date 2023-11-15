import React from "react";
import Styles from "../styles/Cards.Module.css";
import Modal from "./Modal";
import Users from "./Users";
function Cards({ forms, setForms }) {
  return (
    <div className={Styles.cards}>
      <Modal setForms={setForms} />
      <div className="container">
        {forms.length < 1 && <h1 className="nope">No Users</h1>}
        <Users users={forms} setUsers={setForms} />
      </div>
    </div>
  );
}

export default Cards;
