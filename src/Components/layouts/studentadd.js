import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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

            console.log(no + " " + name + " " + surname + " " + Bd + " " + pp + "  ");

            props.SetNewStudent(newData);
            props.setadd_student(null)
            return;
        }
        alert("Fill the all informs");    
    }
  return (
    <div className="backgorund-add-student">
      <h1>Student Add</h1>
      <input type="text" placeholder="No" onChange={(e) => setno(e.target.value)}></input>
      <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} ></input>
      <input type="text" placeholder="Surname" onChange={(e) => setsurname(e.target.value)} ></input>
      <input type="date" placeholder="Birth date" min="2004-01-01" onChange={(e) => setbd(e.target.value)}></input>
      <input type="text" placeholder="Photo (link)" onChange={(e) => setpp(e.target.value)}></input>
      <button onClick={Save}>Save</button>
      <button onClick={() => props.setadd_student(null)}>Cancel</button>
    </div>
  );
};

export default StudentAdd;
