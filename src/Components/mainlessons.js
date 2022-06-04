import React, { useState } from "react";
import LessonList from "./layouts/lessonlist";
import Lesson from "../data/lessons";
import "./mainlessons.css";



let Data = Lesson();
const MainLessons = () =>
{
    const [data, setData] = useState(Data);

    const Searching = (e) =>
    {

        let result = Data.filter(x =>  x.Code.toUpperCase() == e.target.value.toUpperCase());
        if(result.length > 0 )
        {
            setData(result);
            return;
        }
        setData(Data);    
    }
    
    return (
        <div className="MainLesson">
            <div className="BackgroundLesson">
                    <input className="Search-Box-Lesson" type="text" placeholder="Search By Code" onChange={Searching}></input>
                    <h6 className="Active-Lessons">Active Lessons</h6>
                    <div className="Lessons-List">
                       <LessonList items={data} ></LessonList> 
                </div>
            </div>
        </div>
    )
};

export default MainLessons;