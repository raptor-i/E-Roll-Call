import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./studentlist.css"


const LessonList = (props) =>
{
    const ShowInfo = (e) =>
    {
        console.log(e.target.id);
        
        let SelectedLesson = props.items.filter(x => x.Code == e.target.id);

        setDetail(
            <div className="Detailed-Lesson">
                <h1>Lesson Information</h1>
            </div>
        );
    }


    const [detail, setDetail] = useState(null);
    return (
        
        <div>
            <div className="list-group-con">
                {
                    props.items.map(x => 
                        <ul class="list-group" >
                            <li id={x.Code} class="list-group-item action" variant="primary" onClick={ShowInfo}> {x.Code} {x.Name}</li>
                        </ul>)
                }
                
            </div>
            {detail}
        </div>
    )
};

export default LessonList;