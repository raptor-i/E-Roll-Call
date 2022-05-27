import React, { useState } from "react";
import Students from "../../data/students"
import "./studentlist.css"

let StudentData = Students();
console.log(StudentData);
const StudentList = (props) =>
{
    const [value, setValue] = useState(null);
    return (
        
        <div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <h5>{props.items.Name} {props.items.Surname} {props.items.BirthDate}</h5>
            <div classname ="list-group">
                {
                    props.items.map(x => 
                        <ul>{x.No} {x.Name} {x.Surname}</ul>)
                }
            </div>
        </div>
    )
};

export default StudentList;