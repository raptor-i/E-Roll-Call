import React, { useState } from "react";
import "./mainstudents.css";
import Students from "../data/students"
import StudentList from "./layouts/studentslis";





let StudentData = Students();
const MainStudents = () =>
{
    
    const [data, setData] = useState(StudentData);

    const Searching = (e) =>
    {
        if(e.target.value === "")
        {
            setData(StudentData);
            return;
        }
        
       let result = data.find(x => x.Name === e.target.value);
       console.log(result);

       //setData(result);
    }
    return (
        <div className="Main">
            <div className="Background">
                <input className="Search-Box" type="text" placeholder="Search" onChange={Searching}></input>
                <h6 className="CurrentlyStudentHeader">Currently Enrolled Students</h6>
                <div className="Student-List">
                    <StudentList items={data}></StudentList>
                </div>
            </div>
        </div>
    )
}

export default MainStudents;