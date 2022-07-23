// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log("expenseItem evaluated by react");
  // const title = props.title;
  // const clickHandler = () => {
  //   setTitle("updated");
  // };
  //   return <h2> expense item </h2>;
  //   const expenseDate = new Date(2022, 7, 15);
  //   const expenseTitle = "car insurance";
  //   const expenseAmount = 290.29;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
