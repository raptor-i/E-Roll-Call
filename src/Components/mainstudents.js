import React, { useEffect, useState } from "react";
import "./mainstudents.css";
import Students from "../data/students";
import StudentList from "./layouts/studentslis";
import Icons from "../style/icons";
import StudentAdd from "./layouts/studentadd";

let StudentData = Students();


const MainStudents = () => {
  const [data, setData] = useState(StudentData);
  const [add_student, setadd_student] = useState(null);

  const Add_Student = () => {
    setadd_student(<StudentAdd setadd_student={setadd_student} data={data}></StudentAdd>);
  };


  const Searching = (e) => {
    let result = data.filter((x) => x.No == e.target.value);
    console.log(result);
    if (result.length > 0) {
      setData(result);
      return;
    }

    setData(StudentData);
  };
  return (
    <div className="Main">
      <Icons />
      {add_student}
      <div className="Background">
        <input
          className="Search-Box"
          type="text"
          placeholder="Search By No"
          onChange={Searching}
        ></input>
        <button className="person-add" onClick={Add_Student}>
          <span id="add-person" class="material-symbols-outlined">
            person_add
          </span>
        </button>
        <h6 className="CurrentlyStudentHeader">Currently Enrolled Students</h6>
        <div className="Student-List">
          <StudentList setData={setData} items={data.sort((a,b) => a.No - b.No)}></StudentList>
        </div>
      </div>
    </div>
  );
};

export default MainStudents;
