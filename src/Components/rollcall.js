import React, { useState } from "react";
import "./rollcall.css";
import Students from "../data/students";
import Lessons from "../data/lessons";
import RollCallDataShow from "./layouts/rollcalldatashow";
import RollCallData from "../data/rollcalldata";
    

let RollCallsData = RollCallData();
let StudentData = Students();
let LessonData = Lessons();


const RollCall = () =>
{
    const [slesson, setslesson] = useState(null);
    const d = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var today = new Date();

    const SaveRollCall = () =>
    {
        console.log(RollCallsData);
    };

    return (
        <div className="MainRollcall">
            <div className="BackgroundRollcall">
            <h3>Roll Call - {d}</h3>
            <h4 className="roll-call-time">{today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</h4>
            <select className="roll-call-lesson-select" onChange={(e) => setslesson(e.target.value)}>
                <option value="default">Select a lesson</option>
                {LessonData.map(x => 
                    <option value={x.Name} >{x.Name}</option>)}
            </select>
            <h4 className="roll-call-here">Here</h4>
            <div className="roll-calal-students">
            {StudentData.map(x => 
            <RollCallDataShow  StudentData={x} RollCallsData={RollCallsData}
            ></RollCallDataShow>)}
            </div>
            <button onClick={SaveRollCall}>Save</button>
            </div>
        </div>
    )
};

export default RollCall;