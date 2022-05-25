import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/home.css";
import "../style/menubutton.css";
import Icons from "../style/icons";


const StudentsClick = () =>
{
    console.log("You clicked Student");
}

const LessonsClick = () =>
{
    console.log("You clicked Lessons");
}

const RollCallClick = () =>
{
    console.log("You clicked Roll call");
}

const Home = () => 
{
    const navigate = useNavigate();
    
    return(
        <div className="HomeBody">
            <Icons/>
            <div className="Header">
            <label className="System">E-Roll Call System</label>
            <div className="Topics">
                <button className="Raise" onClick={StudentsClick}>Students</button>
                <button className="RaiseLessons" onClick={LessonsClick}>Lessons</button>
                <button className="RaiseRollCall" onClick={RollCallClick}>Roll Call</button>
                
            </div>
            <button className="LogoutButton" onClick={() => navigate("/login")}><span class="material-symbols-outlined">logout</span> Log out</button>
            </div>
        </div>
    );
}

export default Home;