import React from "react";
import moment from "moment";

export default function Date() {
  let jsonStr = moment().format("MMMM Do YYYY, h:mm:ss a");
  console.log(jsonStr);

  return <div>{jsonStr}</div>;

  //   const d = new Date();
  //   const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  //   const day = weekDay[d.getDay()];
  //   const month = months[d.getMonth()];
  //   const date = d.getDate();
  //   const year = d.getFullYear();

  //   return (
  //     <div>
  //       <div>
  //         <h1>{day}</h1>
  //         <h1>{month}</h1>
  //         <h1>{date}</h1>
  //         <h1>{year}</h1>
  //       </div>
  //     </div>
}
