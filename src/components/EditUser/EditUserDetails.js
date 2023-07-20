import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./EditUserDetails.module.css";
import api from "../../api/users";

const EditUserDetails = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${props.updateuser.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  const changehandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const clickUpdateHandler = () => {
    api
      .put(`/users/${props.updateuser.id}`, data)
      .catch((error) => console.log("Error:", error));

    const updatedList = props.userslist.map((user) => {
      return props.updateuser.id === user.id ? data : user;
    });
    props.setUsers(updatedList);

    if (
      data.name.length === 0 ||
      data.phone.length === 0 ||
      data.location.length === 0
    ) {
      setErrorMessage("Fields cannot be blank!");
      return;
    } else {
      setErrorMessage("");
    }

    if (isNaN(data.phone) || data.phone.length !== 10) {
      setErrorMessage("Phone must be 10 digits number!");
      return;
    } else setErrorMessage("");

    if (!errorMessage) {
      props.setEdituserId("");
    }
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
            value={data.name}
          />
        </td>
        <td>
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={data.phone}
            onChange={changehandler}
          />
        </td>
        <td>
          <input
            className={styles.input}
            name="location"
            type="text"
            value={data.location}
            onChange={changehandler}
          />
        </td>
        <td>
          <Button className={styles.button} onClick={clickUpdateHandler}>
            Update
          </Button>
        </td>
        <p className={styles.error}>{errorMessage}</p>
      </tr>
    </>
  );
};

export default EditUserDetails;
