import "../style/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [inv, setInvalid] = useState("");
  const navigate = useNavigate();

  const Logining = () => {
      
    if (Username == "admin" && Password == "123") {
      navigate("/home");
      return;
    }

    console.log(Username + " " + Password);
    setInvalid(<h4 className="InvalidText">Invalid username or password!</h4>);
  };
  
  const EnterHandling = (e) => {
    if (e.key === "Enter") Logining();
  };

  return (
    <div className="body">
      <h1 className="TopHeader">E-Roll Call System</h1>
      <div className="bg">
        <input
          className="UsernameInput"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="PasswordInput"
          type="password"
          placeholder="Password"
          onKeyDown={EnterHandling}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonLogin" value="Login" onClick={Logining} />
        {inv}
      </div>
    </div>
  );
};

export default Login;
