import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./studentlist.css"


const LessonList = (props) =>
{
    const ShowInfo = () =>
    {
        setValue(
            <div className="Detailed-inform">
                <label>Lesson Code</label>
                <h1>test</h1>
            </div>
        );
    }


    const [value, setValue] = useState(null);
    return (
        
        <div>
            <div className="list-group-con">
                {
                    props.items.map(x => 
                        <ul class="list-group" >
                            <li class="list-group-item action" variant="primary" onClick={ShowInfo}> {x.Code} {x.Name}</li>
                        </ul>)
                }
                
            </div>
            {value}
             
        </div>
    )
};

export default LessonList;