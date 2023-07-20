import React, { useEffect, useState } from "react";
import InputForm from "./components/UserInput/InputForm";
import UserDetails from "./components/UserDisplay/UserDetails";
import Navigation from "./components/UI/Navigation";
// import { uuid } from "uuidv4";
import api from "./api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  //Retrieve users..
  const retrieveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };
  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };

    getAllUsers();
  }, []);

  const submitInputFormHandler = async (userName, userPhone, userLocation) => {
    setformSubmitted(true);
    const request = {
      name: userName,
      phone: userPhone,
      location: userLocation,
      id: Math.random().toString(),
    };

    await api.put("/users", request);

    setUsers((prevState) => {
      console.log(prevState);
      return [...prevState, request];
    });
  };

  const backHandler = () => {
    setformSubmitted(false);
  };

  const switchUserDetailsPageHandler = (value) => {
    setformSubmitted(value);
  };

  const deleteDataHandler = (user) => {
    console.log("Usersss=", user);
    setDeleteUser(true);
    setUsers(user);
  };
  return (
    <Navigation>
      <main>
        {!formSubmitted && (
          <InputForm
            title="ENTER USER DETAILS"
            onSubmitInputForm={submitInputFormHandler}
            onUserDetailsPage={switchUserDetailsPageHandler}
          />
        )}
        {formSubmitted && (
          <UserDetails
            title="USER DETAILS"
            userList={users}
            onBack={backHandler}
            onDeleteData={deleteDataHandler}
            deleteFlag={deleteUser}
            setUsers={setUsers}
          />
        )}
      </main>
    </Navigation>
  );
}

export default App;
