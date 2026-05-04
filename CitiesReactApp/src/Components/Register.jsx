import React, { useState } from "react";
import accountService from "../services/AccountApi";
import WarningDialog from "./WarningDialogBox";


const Register = (props) => {
const [dialogConfig, setDialogConfig] = useState(null);

  const [formData, setFormData] = useState({
    PersonName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    stayLoggedIn: false,
    Role: "User" // default role
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    const response = await accountService.register(formData)

    if(response.status == 200 || response.status ==204){
      console.log(response.data)
      localStorage.setItem("token",response.data.token)
      props.setToken(localStorage.getItem("token"))
        setDialogConfig({message:`${formData.email} registered successfully`, type:"notfound",onCancel:()=>{setDialogConfig(null); props.setRegister(null)}})
    }
    else{
        setDialogConfig({message:`Registration failed`, type:"notfound",onCancel:()=>{setDialogConfig(null)}})
    }
  };

  return (
    <>
    {dialogConfig && <WarningDialog 
                    message={dialogConfig.message}
                    type={dialogConfig.type}
                    onConfirm={dialogConfig.onConfirm}
                    onCancel={dialogConfig.onCancel}/>
                    }
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Name</label>
        <input
          type="text"
          name="PersonName"
          value={formData.PersonName}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          required
        />

        <div className="role-section">
          <label>Role</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                name="Role"
                value="User"
                checked={formData.Role === "User"}
                onChange={handleChange}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="Role"
                value="Admin"
                checked={formData.Role === "Admin"}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>
        </div>

        <div className="stay-logged-in">
          <label>
            <input
              type="checkbox"
              name="stayLoggedIn"
              checked={formData.stayLoggedIn}
              onChange={handleChange}
            />
            Stay Logged In
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Register;
