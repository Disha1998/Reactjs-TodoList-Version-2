import React, { useState } from "react";
import { Todoitem } from "../Components/Todoitem";
import moment from "moment";

export const Todos = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [difference, setDiff] = useState();

  let mystyle = {
    minHeight: "70vh",
  };

  // Date & Time Difference

  function findDifference() {
    const currentDate = new Date();
    setEndDate(moment(currentDate).format("MM-DD-YYYY hh:mm:ss"));
    var date1 = moment(startDate);
    var Stime = date1.utc().format("HH:mm:ss");
    var date2 = moment(currentDate);
    var Etime = date2.utc().format("HH:mm:ss");
    var startTime = moment.duration(Stime, "HH:mm:ss");
    var endTime = moment.duration(Etime, "HH:mm:ss");

   let diff= endTime.subtract(startTime);
   setDiff(diff)
    console.log(diff,"difference")
    console.log(diff.seconds());
    console.log(diff.minutes());
    console.log(diff.hours());
  }

  console.log(startDate);

  //

  return (
    <div className="container my-5" style={mystyle}>
      <h3 className=" my-5">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todoitem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />{" "}
                <button
                  onClick={() => {
                    setStartDate(new Date());
                  }}
                >
                  Time Start
                </button>
                <h5>
                  {startDate !== undefined &&
                    moment(startDate).format("MM-DD-YYYY hh:mm:ss")}
                </h5>
                <br />
                <br />
                <h5>{endDate}</h5>
                <button onClick={() => findDifference()}>Completed</button>
                <h5>You took : {difference !== undefined && difference.seconds() +  "seconds"} </h5>
                <hr />
              </>
            );
          })}
    </div>
  );
};
