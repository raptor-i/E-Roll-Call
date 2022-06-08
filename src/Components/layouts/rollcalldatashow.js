import { useEffect, useState } from "react";
import "./rollcalldatashow.css";


const RollCallDataShow = (props) => {
  const [CBvalue, setCBvalue] = useState(false);

  let RollCallArray = {
    No: props.StudentData.No,
    Name: props.StudentData.Name,
    Surname: props.StudentData.Surname,
    status: CBvalue ? "Yes" : "No",
  };




  const Handler = () => {
    let index = props.RollCallsData.indexOf(RollCallArray);
    setCBvalue(!CBvalue);
    props.RollCallsData.splice(index, 1);
    props.RollCallsData.push(RollCallArray);
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
