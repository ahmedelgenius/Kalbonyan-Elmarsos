// import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "./hooks/use.counter";
const ForwardCounter = () => {
  const counter = useCounter();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
