import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/home.css"

const Home = () => 
{
    const navigate = useNavigate();

    return(
        <div className="HomeBody">
            <div className="Header">
            <label className="System">E-Roll Call System V1.0</label>
            <button className="LogoutButton" onClick={() => navigate("/login")}>Log out</button>
            </div>
            <button>You are at home</button>
        </div>
    );
}

export default Home;