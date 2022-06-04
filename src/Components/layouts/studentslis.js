import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./studentlist.css"


const StudentList = (props) =>
{
    const ShowInfo = (e) =>
    {
        console.log(e.target.id)

        let SelectedStudent = props.items.filter(x => x.No == e.target.id);
        console.log(SelectedStudent[0].Img);
        setDetail(
            <div className="Detailed-Student">
                <h1>Student Information</h1>
                <h4>Name : {SelectedStudent[0].Name} </h4>
                <h4>Surname : {SelectedStudent[0].Surname}</h4>
                <h4>School no : {SelectedStudent[0].No}</h4>
                <h4>Birth Date : {SelectedStudent[0].BirthDate}</h4>
                <img className="pp" src={SelectedStudent[0].Img}></img>
            </div>
        );
    }


    const [Detail, setDetail] = useState(null);
    return (
        
        <div>
            <h5>{props.items.Name} {props.items.Surname} {props.items.BirthDate}</h5>
            <div className="list-group-con">
                {
                    props.items.map(x => 
                        
                        <ul class="list-group" >
                            <li id={x.No} class="list-group-item action" variant="primary" onClick={ShowInfo}> {x.No} {x.Name} {x.Surname} </li>
                        </ul>)
                }
            </div>
            {Detail}
        </div>
    )
};

export default StudentList;