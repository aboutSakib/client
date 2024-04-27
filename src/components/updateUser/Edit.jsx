import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../addUser/add.css";
const Edit = () => {
  const { id } = useParams();
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const [user, setUser] = useState(users);
  const inputChangeHandeler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getOne/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/update/${id}`,
        user
      );
      toast.success("Data Update Successfully", { position: "top-center" });
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            onChange={inputChangeHandeler}
            id="fname"
            value={user.fname}
            name="fname"
            autoComplete="off"
            placeholder="Enter Your First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            onChange={inputChangeHandeler}
            id="lname"
            value={user.lname}
            name="lname"
            autoComplete="off"
            placeholder="Enter Your last name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputChangeHandeler}
            id="email"
            value={user.email}
            name="email"
            autoComplete="off"
            placeholder="Enter Your email Adress"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Update USER</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
