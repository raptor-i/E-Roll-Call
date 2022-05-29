import React, { useState } from "react";
import LessonList from "./layouts/lessonlist";
import Lesson from "../data/lessons";
import "./mainlessons.css";



let Data = Lesson();
const MainLessons = () =>
{
    
    return (
        <div className="MainLesson">
            <div className="BackgroundLesson">
                <div className="Lessons-Column">
                    <h6>Active Lessons</h6>
                    <LessonList items={Data} ></LessonList>
                </div>
            </div>
        </div>
    )
};

export default MainLessons;