import { useState } from "react";
import "./lessonadd.css";
console.log("in lesson");
const LessonAdd = (props) =>
{
    const [no, setno] = useState("");
    const [name, setname] = useState("");
    const [teacher, setTeacher] = useState("");
    const [credit, setcredit] = useState("");

    const Save = () =>
    {
        if(no != "" && name != "" && teacher != "" && credit != "")
        {
            let newData = {
                Code : no,
                Name : name,
                Teacher : teacher,
                Credit : credit
            };

            props.Data.push(newData);
            props.setlessonadd(null)
            return;
        }

        alert("Fill the all informs");   

    }


    return (
        <div class="Background-Lesson-Add">
          <h1 className="lesson-add-header">Lesson Add</h1>
          <input type="text" className="lesson-add-code" placeholder="Code" onChange={(e) => setno(e.target.value)}></input>
          <input type="text" className="lesson-add-Name" placeholder="Name" onChange={(e) => setname(e.target.value)} ></input>
          <input type="text" className="lesson-add-teacher" placeholder="Teacher" onChange={(e) => setTeacher(e.target.value)} ></input>
          <input type="number" className="lesson-add-Credit" placeholder="Credit" min="1" onChange={(e) => setcredit(e.target.value)}></input>
          <button className="lesson-add-save" onClick={Save}>Save</button>
          <button className="lesson-add-cancel" onClick={() => props.setlessonadd(null)}>Cancel</button>
        </div>
      );
}

export default LessonAdd;