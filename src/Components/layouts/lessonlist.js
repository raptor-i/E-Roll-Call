import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./lessonlist.css"
import Lesson from "../../data/lessons"
import LessonEdit from "./lessonedit";

let Data = Lesson();

const LessonList = (props) =>
{
    const[slctdLesson, setslctdLesson] = useState("");
    const[lesedit, setlesedit] = useState(null);

    let info = <p className="info-click">Click to a lesson to see more information.</p>;
    
    const Edit_Lesson = () =>
    {
        setlesedit(<LessonEdit Data={Data} slctdLesson={slctdLesson} setlesedit={setlesedit}></LessonEdit>);
    };

    const ShowInfo = (e) =>
    {
        
        let SelectedLesson = props.items.filter(x => x.Code == e.target.id);
        setslctdLesson(SelectedLesson);
        setDetail(
            <div className="Detailed-Lesson">
                <div className="Alt-info">
                <h4 >Code : {SelectedLesson[0].Code}</h4>
                <h4 >Name : {SelectedLesson[0].Name}</h4>
                <h4 >Teacher : {SelectedLesson[0].Teacher}</h4>
                <h4 >Credit : {SelectedLesson[0].Credit}</h4>
            </div>
            </div>
        );
    }


    const [detail, setDetail] = useState(info);
    return (
        <div>
            {lesedit}
            <button className="edit-student" onClick={Edit_Lesson}>
        <span id="edit-lesson" class="material-symbols-outlined">edit_note</span>
      </button>
            <h1 className="Detailed-Lesson">Lesson Information</h1>
            <div className="list-group-lesson">
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