import React from "react";
import "./NewCost.css";
import CostFrom from "./CostFrom";

export default function NewCost(props) {
  function saveCostDataHandler(inputCostData) {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  }

  return (
    <div className="new-cost">
      <CostFrom onSaveCostData={saveCostDataHandler} />
    </div>
  );
}
