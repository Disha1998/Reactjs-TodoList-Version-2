import React,{useState} from "react";
// import { Todos } from './Todos'
import moment from "moment";
import {Table} from 'react-bootstrap'


export const Todoitem = ({ todo, onDelete,todos }) => {
  const [startDate, setStartDate] = useState(); //For start Date
  const [endDate, setEndDate] = useState(); //for End Date
  const [difference, setDiff] = useState(); //For difference between two Dates

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
  }
    // console.log(diff,"difference")
    // console.log(diff.seconds());
    // console.log(diff.minutes());
    // console.log(diff.hours());
  // console.log(startDate);
  //
  // console.log(todo);
  return (
    <div>
      {todo && (
        <div>
           <Table >
 
  
  <tbody>
    <tr>
      <td>{todo.sno}</td>
      <td><h4>{todo.title}</h4></td>
      <td> <button className="btn btn-sm btn-dark "
                  onClick={() => {
                    setStartDate(new Date());
                    
                  }}
                >
                   Start Time
                </button>
                <h5>
                  {startDate !== undefined &&
                    moment(startDate).format("MM-DD-YYYY hh:mm:ss")}
                </h5>
                </td>
      <td><button className="btn btn-sm btn-dark" onClick={() => findDifference()}>End Time</button>
                <h5 style={{}}>{endDate}</h5></td>
      <td> <h5 className="my-3" style={{color:"blue"}}>You took : {difference !== undefined && difference.seconds() +  " Seconds"  } </h5></td>
      <td><button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button></td>
    </tr>
  </tbody>
</Table>
        </div>
      )}
    </div>
  );
}


