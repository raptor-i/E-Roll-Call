import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./studentlist.css";
import Icons from "../../style/icons";
import StudentEdit from "./studentedit";
import Students from "../../data/students";

let StudentData = Students();
const StudentList = (props) => {
  const [slctStudent, SetslctStudent] = useState();
  const [editS, seteditS] = useState(null);
  
  let info = (
    <p className="info-click">Click to a student to see more information.</p>
  );
  
  const Edit_Student = () =>
  {
    console.log("Editing")
    if(slctStudent)
    {
      seteditS(<StudentEdit slctStudent={slctStudent} seteditS={seteditS} StudentData={StudentData.sort((a,b) => a.No - b.No)}></StudentEdit>)
      return;
    }
    alert("Select a student!");
  };


  const ShowInfo = (e) => {
    console.log(e.target.id);

    let SelectedStudent = props.items.filter((x) => x.No == e.target.id);

    SetslctStudent(SelectedStudent);

    setDetail(
      <div className="Detailed-Student">
        <div className="Alt-info">
          <h4>Name : {SelectedStudent[0].Name} </h4>
          <h4>Surname : {SelectedStudent[0].Surname}</h4>
          <h4>School no : {SelectedStudent[0].No}</h4>
          <h4>Birth Date : {SelectedStudent[0].BirthDate}</h4>
          <img className="pp" src={SelectedStudent[0].Img}></img>
        </div>
      </div>
    );
  };

  const [Detail, setDetail] = useState(info);
  return (
    <div>
      {editS}
      <Icons />
      <button className="edit-student" onClick={Edit_Student}>
        <span id="edit-student" class="material-symbols-outlined">edit_note</span>
      </button>
      <h1 className="Detailed-Student">Student Information</h1>
      <div className="list-group-con">
        {props.items.map((x) => (
          <ul class="list-group">
            <li
              id={x.No}
              class="list-group-item action"
              variant="primary"
              onClick={ShowInfo}
            >
              {" "}
              {x.No} {x.Name} {x.Surname}{" "}
            </li>
          </ul>
        ))}
      </div>
      {Detail}
    </div>
  );
};

export default StudentList;
