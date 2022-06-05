import React, { useState } from "react";
import LessonList from "./layouts/lessonlist";
import Lesson from "../data/lessons";
import "./mainlessons.css";
import Icons from "../style/icons";

let Data = Lesson();
const MainLessons = () => {
  const [data, setData] = useState(Data);
  


  const Add_Lesson = () => {

    
      
  };

  const Searching = (e) => {
    let result = Data.filter(
      (x) => x.Code.toUpperCase() == e.target.value.toUpperCase()
    );
    if (result.length > 0) {
      setData(result);
      return;
    }
    setData(Data);
  };

  return (
    <div className="MainLesson">
      
      <Icons />
      <div className="BackgroundLesson">
        <input
          className="Search-Box-Lesson"
          type="text"
          placeholder="Search By Code"
          onChange={Searching}
        ></input>
        <button className="lesson-add" onClick={Add_Lesson}>
          <span id="add-circle" class="material-symbols-rounded">add_circle</span>
        </button>
        <h6 className="Active-Lessons">Active Lessons</h6>
        <div className="Lessons-List">
          <LessonList items={data}></LessonList>
        </div>
      </div>
    </div>
  );
};

export default MainLessons;
