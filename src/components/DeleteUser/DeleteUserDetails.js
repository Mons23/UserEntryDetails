import React from "react";
import Button from "../UI/Button";
import styles from "./DeleteUserDetails.module.css";

const DeleteUserDetails = (props) => {
  const clickDeletehandler = () => {
    const updatedUsers = props.userListDetails.filter((user) => {
      return user.id !== props.userId;
    });
    console.log(updatedUsers);
    props.onConfirm(updatedUsers);
  };
  return (
    <Button className={styles.deleteButton} onClick={clickDeletehandler}>
      Delete
    </Button>
  );
};

export default DeleteUserDetails;
