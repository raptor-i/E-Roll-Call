import React, { useState } from "react";
import Students from "../../data/students"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./studentlist.css"


const StudentList = (props) =>
{
    const ShowInfo = () =>
    {
        alert("you have clicked");
    }


    const [value, setValue] = useState(null);
    return (
        
        <div>
            <h5>{props.items.Name} {props.items.Surname} {props.items.BirthDate}</h5>
            <div className="list-group-con">
                {
                    props.items.map(x => 
                        
                        <ul class="list-group" >
                            <li class="list-group-item action" variant="primary" onClick={ShowInfo}> {x.No} {x.Name} {x.Surname} </li>
                        </ul>)
                }
            </div>
        </div>
    )
};

export default StudentList;