import React, { useEffect, useState } from "react";
import "./rollcall.css";
import Students from "../data/students";
import Lessons from "../data/lessons";
import RollCallDataShow from "./layouts/rollcalldatashow";
import RollCallData from "../data/rollcalldata";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

let RollCallsData = RollCallData();
let StudentData = Students();
let LessonData = Lessons();

const RollCall = () => {
  const [slesson, setslesson] = useState(null);
  const d = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const today = new Date();

  let datas = [slesson, d];
  
  const Exporting = (csvData, fileName) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    console.log("Hello");
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
}


  const SaveRollCall = () => {
    if (slesson == null) {
      alert("Select a lesson");
      return;
    }
    RollCallsData.splice(RollCallsData.length/2, RollCallsData.length/2);

    if (datas[2] == undefined)
        datas.push(RollCallsData);

    Exporting(datas, "RollCall");
    //window.location.reload()
    console.log(datas);
  };

  return (
    <div className="MainRollcall">
      <div className="BackgroundRollcall">
        <h3>Roll Call - {d}</h3>
        <h4 className="roll-call-time">
          {today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds()}
        </h4>
        <select
          className="roll-call-lesson-select"
          onChange={(e) => setslesson(e.target.value)}
        >
          <option value="default">Select a lesson</option>
          {LessonData.map((x) => (
            <option value={x.Name}>{x.Name}</option>
          ))}
        </select>
        <h4 className="roll-call-here">Here</h4>
        <div className="roll-calal-students">
          {StudentData.map((x) => (
            <RollCallDataShow
              StudentData={x}
              RollCallsData={RollCallsData}
            ></RollCallDataShow>
          ))}
        </div>
        <button className="roll-call-export" onClick={SaveRollCall}>Save</button>
      </div>
    </div>
  );
};

export default RollCall;
