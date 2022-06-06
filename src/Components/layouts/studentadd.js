import { useState } from "react";
import "./studentadd.css";

const StudentAdd = (props) => {
    const [no, setno] = useState("");
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [Bd, setbd] =useState("");
    const [pp, setpp] = useState("");

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

            console.log(newData.No + " " + newData.Name + " " + newData.Surname);
            
            props.data.push(newData);
            props.setadd_student(null)
            return;
        }
        alert("Fill the all informs");    
    }
  return (
    <div className="backgorund-add-student">
      <h1 className="student-add-header">Student Add</h1>
      <input type="text" className="student-add-no" placeholder="No" onChange={(e) => setno(e.target.value)}></input>
      <input type="text" className="student-add-Name" placeholder="Name" onChange={(e) => setname(e.target.value)} ></input>
      <input type="text" className="student-add-Sur" placeholder="Surname" onChange={(e) => setsurname(e.target.value)} ></input>
      <input type="date" className="student-add-BD" placeholder="Birth date" min="2004-01-01" onChange={(e) => setbd(e.target.value)}></input>
      <input type="text" className="student-add-photo" placeholder="Photo (link)" onChange={(e) => setpp(e.target.value)}></input>
      <button className="student-add-save" onClick={Save}>Save</button>
      <h4 className="student-add-preview">Image preview<img className="student-add-prep" src={pp}></img></h4>
      <button className="student-add-cancel" onClick={() => props.setadd_student(null)}>Cancel</button>
    </div>
  );
};

export default StudentAdd;
