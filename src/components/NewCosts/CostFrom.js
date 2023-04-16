import React from "react";
import { useState } from "react";
import "./CostForm.css";

export default function CostFrom() {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  function nameChangeHandler(event) {
    setInputName(event.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value,
    //   };
    // });
  }

  function amountChangeHandler(event) {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  }
  function dateChangeHandler(event) {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    setInputName("");
    setInputAmount("");
    setInputDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            value={inputAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            value={inputDate}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
          <div className=".new-cost__actions"></div>
          <button type="submit">Добавить Расход</button>
        </div>
      </div>
    </form>
  );
}
