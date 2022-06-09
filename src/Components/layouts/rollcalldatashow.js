import { useEffect, useState } from "react";
import "./rollcalldatashow.css";
import Students from "../../data/students"
import RollCallData from "../../data/rollcalldata";


let StudentData = Students();
let RollCallDataa = RollCallData();
const RollCallDataShow = (props) => {
  const [CBvalue, setCBvalue] = useState(true);

  RollCallDataa= [];

  let RollCallArray = {
    No: props.StudentData.No,
    Name: props.StudentData.Name,
    Surname: props.StudentData.Surname,
    status: "No"
  };

  useEffect(() => {
    props.RollCallsData.push(RollCallArray);
  }, []);

  
  let index = RollCallDataa.indexOf(RollCallArray);
  const Handler = () => {
    setCBvalue(!CBvalue);
    if(index == -1)
    {
        RollCallArray.status ="Yes";
        index = RollCallDataa.indexOf(RollCallArray); 
    } 
    if(CBvalue)
    {
        RollCallArray.status = "Yes";
        RollCallDataa[index] = RollCallArray;
    }
    else{ console.log("Noo");
        RollCallArray.status = "No";
        RollCallDataa[index] = RollCallArray;
    }
  };

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
        onChange={Handler}
      ></input>
    </div>
  );
};

export default RollCallDataShow;
