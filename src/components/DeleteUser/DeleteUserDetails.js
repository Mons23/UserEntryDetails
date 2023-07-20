import React from "react";
import Button from "../UI/Button";
import styles from "./DeleteUserDetails.module.css";
import api from "../../api/users";

const DeleteUserDetails = (props) => {
  const clickDeletehandler = async () => {
    await api.delete(`/users/${props.userId}`);
    const updatedUsers = props.userListDetails.filter((user) => {
      return user.id !== props.userId;
    });
    props.onConfirm(updatedUsers);
  };
  return (
    <Button className={styles.deleteButton} onClick={clickDeletehandler}>
      Delete
    </Button>
  );
};

export default DeleteUserDetails;
