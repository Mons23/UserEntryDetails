import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./InputForm.module.css";
import Button from "../UI/Button";

const InputForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const inputUserName = useRef();
  const inputUserPhone = useRef();
  const inputUserLocation = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = inputUserName.current.value;
    const phone = inputUserPhone.current.value;
    const location = inputUserLocation.current.value;
    if (
      userName.trim() === "" ||
      phone.trim() === "" ||
      location.trim() === ""
    ) {
      setErrorMessage("--- Please enter all the details ---");
      return;
    }
    if (isNaN(phone) || phone.length !== 10) {
      setErrorMessage("--- Please enter 10 digit number ---");
      return;
    }

    props.onSubmitInputForm(userName, phone, location);
  };

  const clickHandler = () => {
    props.onUserDetailsPage(true);
  };

  return (
    <Card>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.error}>{errorMessage}</p>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Name:</label>
        <input id="username" type="text" ref={inputUserName} />
        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="text" ref={inputUserPhone} />
        <label htmlFor="location">Current Location:</label>
        <input id="location" type="text" ref={inputUserLocation} />
        <Button className={styles.button} type="submit">
          SUBMIT
        </Button>
        <Button onClick={clickHandler}>USER DETAILS PAGE</Button>
      </form>
    </Card>
  );
};

export default InputForm;
