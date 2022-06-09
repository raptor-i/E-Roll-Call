import { useEffect, useState } from "react";
import "./rollcalldatashow.css";
import Students from "../../data/students"
import RCID from "../../data/rcid";

let test = RCID();

//let StudentData = Students();
const RollCallDataShow = (props) => {
  const [CBvalue, setCBvalue] = useState(true);


  const HandlerTest = () =>
  {
    setCBvalue(!CBvalue);
    if(test.includes(props.StudentData.No))
    {
      let index = test.indexOf(props.StudentData.No);
      test.splice(index, 1);
      return;
    }
      
      test.push(props.StudentData.No);
  }


  return (
    <div className="roll-call-data-row">
      <h6>
        {props.StudentData.No +
          " " +
          props.StudentData.Name +
          " " +
          props.StudentData.Surname}
      </h6>
      <input
        className="roll-call-checkbox"
        type="checkbox"
        value={CBvalue}
        onChange={HandlerTest}
      ></input>
    </div>
  );
};

export default RollCallDataShow;
