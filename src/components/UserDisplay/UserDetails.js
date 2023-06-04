import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserDetails.module.css";
import DeleteUserDetails from "../DeleteUser/DeleteUserDetails";
import EditUserDetails from "../EditUser/EditUserDetails";

const UserDetails = (props) => {
  const [editUserId, setEdituserId] = useState("");
  const confirmDeleteHandler = (user) => {
    props.onDeleteData(user);
  };

  const confirmEditHandler = (id) => {
    console.log("Userid-- user", id);
    setEdituserId(id);
  };
  return (
    <Card className={styles.userDetailsCard}>
      <h2 className={styles.header}>{props.title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Edit User</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map((user) =>
            user.id === editUserId ? (
              <EditUserDetails
                updateuser={user}
                userslist={props.userList}
                setUsers={props.setUsers}
                setEdituserId={setEdituserId}
              />
            ) : (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.location}</td>
                <td>
                  <Button
                    onClick={() => confirmEditHandler(user.id)}
                    className={styles.editButton}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <DeleteUserDetails
                    userListDetails={props.userList}
                    userId={user.id}
                    onConfirm={confirmDeleteHandler}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Button className={styles.button} onClick={props.onBack}>
        BACK
      </Button>
    </Card>
  );
};
export default UserDetails;
