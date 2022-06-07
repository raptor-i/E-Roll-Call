import { useState } from "react";
import "./lessonedit.css";



const LessonEdit = (props) =>
{
    const [no, setno] = useState(props.slctdLesson[0].Code);
    const [name, setname] = useState(props.slctdLesson[0].Name);
    const [teacher, setTeacher] = useState(props.slctdLesson[0].Teacher);
    const [credit, setcredit] = useState(props.slctdLesson[0].Credit);

    const Save = () =>
    {

        if(no != '' && name != '' && teacher != '' && teacher != '')
        {
            let newData = {
                Code : no,
                Name : name,
                Teacher : teacher,
                Credit : credit
            };

            console.log(props.Data);
            let index = props.Data.indexOf(props.slctdLesson[0]);
            props.Data.splice(index, 1);
            props.Data.push(newData);
            props.setlesedit(null)
            return;
     }

      alert("Fill the all informs"); 
    }
    
    return (
        <div class="Background-Lesson-Add">
        <h1 className="lesson-add-header">Lesson Add</h1>
        <input type="text" className="lesson-add-code" placeholder="Code" defaultValue={props.slctdLesson[0].Code} onChange={(e) => setno(e.target.value)}></input>
        <input type="text" className="lesson-add-Name" placeholder="Name" defaultValue={props.slctdLesson[0].Name} onChange={(e) => setname(e.target.value)} ></input>
        <input type="text" className="lesson-add-teacher" placeholder="Teacher" defaultValue={props.slctdLesson[0].Teacher} onChange={(e) => setTeacher(e.target.value)} ></input>
        <input type="number" className="lesson-add-Credit" placeholder="Credit"defaultValue={props.slctdLesson[0].Credit}  min="1" onChange={(e) => setcredit(e.target.value)}></input>
        <button className="lesson-add-save" onClick={Save}>Save</button>
        <button className="lesson-add-cancel" onClick={() => props.setlesedit(null)}>Cancel</button>
      </div>
  );
}

export default LessonEdit;