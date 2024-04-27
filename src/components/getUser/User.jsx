import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/getAll");
      setUsers(res.data);
    };
    fetchData();
  }, []);

  const deleteUser = async (userID) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${userID}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userID));
      toast.success("Delete Successfully", { position: "top-center" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        {" "}
        Add User{" "}
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>User name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname}
                  {user.lname}{" "}
                </td>
                <td>{user.email}</td>
                <td className="actionButtions">
                  <button onClick={() => deleteUser(user._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/` + user._id}>
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
