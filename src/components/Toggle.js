import React, { useState } from "react";

function Toggle() {
  const [ turn, setTurn ] = useState(false)

  const toggle = turn ? "ON" : "OFF"

  function handleClick(){
    setTurn(!turn)
  }

  return <button style={ turn ? {background:"red"} : {background:"white"} }  onClick={handleClick}>{toggle}</button>;
}

export default Toggle;
