import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/home.css";
import "../style/menubutton.css";
import Icons from "../style/icons";
import MainStudents from "../Components/mainstudents";
import MainLessons from "../Components/mainlessons";
import RollCall from "../Components/rollcall";



const Home = () => 
{
    const [Window, setWindow] = useState(null);
    const navigate = useNavigate();

    const StudentsClick = () =>
    {
        setWindow(MainStudents())
        console.log("You clicked Student");
    }

    const LessonsClick = () =>
    {
        setWindow(MainLessons());
        console.log("You clicked Lessons");
    }

    const RollCallClick = () =>
    {
        setWindow(RollCall());
        console.log("You clicked Roll call");
    }

    return(
        <div className="HomeBody">
            <Icons/>
            <div className="Header">
            <label className="System">E-Roll Call System</label>
            <div className="Topics">
                <button className="Raise" onClick={StudentsClick}>Students</button>
                <button className="RaiseLessons" onClick={LessonsClick}>Lessons</button>
                <button className="RaiseRollCall" onClick={RollCallClick}>Roll Call</button>
                
                {Window}
            </div>
            <button className="LogoutButton" onClick={() => navigate("/login")}><span class="material-symbols-outlined">logout</span> Log out</button>
            </div>
        </div>
    );
}

export default Home;