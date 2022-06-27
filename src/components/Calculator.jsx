import React, { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[1-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const clear = () => {
    setExpression("");
    setAnswer(0);
  };
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-1 px-1 pb-1 bg-black text-center cursor-pointer">
      <div onClick={display} id="display" className="col-span-4">
        <input
          className=" text-white text-right bg-black"
          type="text"
          value={expression}
          placeholder="0"
          disabled
        />
        <div className="text-right text-2xl text-yellow-500">{answer}</div>
      </div>
      <div onClick={clear} id="AC" className="col-span-2 p-5 bg-red-500">
        AC
      </div>
      <div
        onClick={() => display("/")}
        id="div"
        className="col-span-1 p-5 bg-gray-500"
      >
        /
      </div>
      <div
        onClick={() => display("x")}
        id="times"
        className="col-span-1 p-5 bg-gray-500"
      >
        x
      </div>
      <div
        onClick={() => display("7")}
        id="seven"
        className="col-span-1 p-5 bg-gray-700"
      >
        7
      </div>
      <div
        onClick={() => display("8")}
        id="eight"
        className="col-span-1 p-5 bg-gray-700"
      >
        8
      </div>
      <div
        onClick={() => display("9")}
        id="nine"
        className="col-span-1 p-5 bg-gray-700"
      >
        9
      </div>
      <div
        onClick={() => display("-")}
        id="minus"
        className="col-span-1 p-5 bg-gray-500"
      >
        -
      </div>
      <div
        onClick={() => display("4")}
        id="four"
        className="col-span-1 p-5 bg-gray-700"
      >
        4
      </div>
      <div
        onClick={() => display("5")}
        id="five"
        className="col-span-1 p-5 bg-gray-700"
      >
        5
      </div>
      <div
        onClick={() => display("6")}
        id="six"
        className="col-span-1 p-5 bg-gray-700"
      >
        6
      </div>
      <div
        onClick={() => display("+")}
        id="plus"
        className="col-span-1 p-5 bg-gray-500"
      >
        +
      </div>
      <div
        onClick={() => display("1")}
        id="one"
        className="col-span-1 p-5 bg-gray-700"
      >
        1
      </div>
      <div
        onClick={() => display("2")}
        id="two"
        className="col-span-1 p-5 bg-gray-700"
      >
        2
      </div>
      <div
        onClick={() => display("3")}
        id="three"
        className="col-span-1 p-5 bg-gray-700"
      >
        3
      </div>
      <div
        onClick={calculate}
        id="equal"
        className="row-span-2 p-5 bg-teal-800"
      >
        =
      </div>
      <div
        onClick={() => display("0")}
        id="zero"
        className="col-span-2 p-5 bg-gray-700"
      >
        0
      </div>
      <div
        onClick={() => display(".")}
        id="dot"
        className="col-span-1 p-5 bg-gray-700"
      >
        .
      </div>
    </div>
  );
};

export default Calculator;
