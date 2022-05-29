import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./studentlist.css"


const LessonList = (props) =>
{
    const ShowInfo = () =>
    {
        alert("you have clicked");
    }


    const [value, setValue] = useState(null);
    return (
        
        <div>
            <h5>{props.items.Code} {props.items.Name}</h5>
            <div className="list-group-con">
                {
                    props.items.map(x => 
                        
                        <ul class="list-group" >
                            <li class="list-group-item action" variant="primary" onClick={ShowInfo}> {x.Code} {x.Name}</li>
                        </ul>)
                }
            </div>
            <h1>test</h1>
        </div>
    )
};

export default LessonList;