import React from "react";
import "./NewCost.css";
import CostFrom from "./CostFrom";
import { useState } from "react";

export default function NewCost(props) {
  const [isForVisible, setIsFormVisible] = useState(false);

  function saveCostDataHandler(inputCostData) {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isForVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый росход</button>
      )}
      {isForVisible && (
        <CostFrom
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}
