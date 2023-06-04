import React from "react";
import Button from "../UI/Button";
import styles from "./EditUserDetails.module.css";

const EditUserDetails = (props) => {
  const changehandler = (event) => {
    const updatedList = props.userslist.map((user) => {
      return props.updateuser.id === user.id
        ? { ...user, [event.target.name]: event.target.value }
        : user;
    });
    props.setUsers(updatedList);
  };

  const clickUpdateHandler = () => {
    props.setEdituserId("");
  };
  return (
    <>
      <tr>
        <td>
          <input
            className={styles.input}
            name="name"
            type="text"
            onChange={changehandler}
            value={props.updateuser.name}
          />
        </td>
        <td>
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={props.updateuser.phone}
            onChange={changehandler}
          />
        </td>
        <td>
          <input
            className={styles.input}
            name="location"
            type="text"
            value={props.updateuser.location}
            onChange={changehandler}
          />
        </td>
        <Button className={styles.button} onClick={clickUpdateHandler}>
          Update
        </Button>
      </tr>
    </>
  );
};

export default EditUserDetails;
