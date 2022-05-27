import React, { useState } from "react";
import "./mainstudents.css";
import Students from "../data/students"
import StudentList from "./layouts/studentslis";





let StudentData = Students();
const MainStudents = () =>
{

    return (
        <div className="Main">
            <div className="Background">
            <StudentList items={StudentData}></StudentList>
            </div>
        </div>
    )
};

export default MainStudents;