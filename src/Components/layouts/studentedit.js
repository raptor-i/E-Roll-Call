import { useState } from "react";
import "./studentedit.css";


const StudentEdit = (props) =>
{
    const [no, setno] = useState(props.slctStudent[0].No);
    const [name, setname] = useState(props.slctStudent[0].Name);
    const [surname, setsurname] = useState(props.slctStudent[0].Surname);
    const [Bd, setbd] =useState(props.slctStudent[0].BirthDate);
    const [pp, setpp] = useState(props.slctStudent[0].Img);

    
    const Save = () =>
    {

        if(no != '' && name != '' && surname != '' && Bd != '' && pp != '')
        {
            let newData = {
                No : no,
                Name : name,
                Surname : surname,
                BirthDate : Bd,
                Img : pp
            };

          let index = props.StudentData.indexOf(props.slctStudent[0]);
          props.StudentData.splice(index, 1);
          props.StudentData.push(newData);
          props.seteditS(null)
          return;
     }

      alert("Fill the all informs"); 
    }
    
    const Delete = () =>
    {
        let index = props.StudentData.indexOf(props.slctStudent[0]);
        props.StudentData.splice(index, 1);
        props.seteditS(null);
        props.SetslctStudent(null);
        return;
    }
    return (
    <div className="backgorund-edit-student">
      <h1 className="student-add-header">Student Edit or Delete</h1>
      <input type="text" className="student-add-no" defaultValue={props.slctStudent[0].No} placeholder="No" onChange={(e) => setno(e.target.value)}></input>
      <input type="text" className="student-add-Name" defaultValue={props.slctStudent[0].Name} placeholder="Name" onChange={(e) => setname(e.target.value)} ></input>
      <input type="text" className="student-add-Sur" defaultValue={props.slctStudent[0].Surname} placeholder="Surname" onChange={(e) => setsurname(e.target.value)} ></input>
      <input type="date" className="student-add-BD" defaultValue={props.slctStudent[0].BirthDate} placeholder="Birth date" min="2004-01-01" onChange={(e) => setbd(e.target.value)}></input>
      <input type="text" className="student-add-photo" defaultValue={props.slctStudent[0].Img} placeholder="Photo (link)" onChange={(e) => setpp(e.target.value)}></input>
      <button className="student-add-save" onClick={Save}>Save</button>
      <button className="student-edit-delete" onClick={Delete}>Delete</button>
      <h4 className="student-add-preview">Image preview<img className="student-add-prep" src={props.slctStudent[0].Img}></img></h4>
      <button className="student-add-cancel" onClick={() => props.seteditS(null)}>Cancel</button>
    </div>
  );
}

export default StudentEdit;