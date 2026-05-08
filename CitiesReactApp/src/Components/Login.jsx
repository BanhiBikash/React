import React, { useState } from "react";
import accountService from "../services/AccountApi";
import WarningDialog from "./WarningDialogBox";

function Login(props) {
  const [formData, setFormData] = useState({Email:"", Password:"", stayLoggedIn:true});
  const [dialogConfig, setDialogConfig] = useState(null);
  

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await accountService.login(formData)

    if(response.status==200 || response.status==201){
        console.log("loggedIn")
        console.log(response.data)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("RefreshToken",response.data.refreshToken)
        props.setToken(response.data.token)
        props.setLogin(false)
    }else{   console.log("failed")      
        setDialogConfig({message:"Login unsuccessfull", type:"notfound", onCancel:()=>{setDialogConfig(null)}})
    }
  };

  const handleChange = (event)=>{
    const{name,value,type,checked} = event.target
    setFormData({
      ...formData,
      [name] : type==="checkbox"?checked:value
    });
  }

  return (
    <>
    {dialogConfig && <WarningDialog message={dialogConfig.message}
                    type={dialogConfig.type}
                    onConfirm={dialogConfig.onConfirm}
                    onCancel={dialogConfig.onCancel} />
    }
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={function(event){handleChange(event)}}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={formData.Password}
          name="Password"
          onChange={function(event){handleChange(event)}}
          required
        />

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              name="stayLoggedIn"
              checked={formData.stayLoggedIn}
              onChange={function(event){handleChange(event)}}
            />
            Stay Logged In
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
