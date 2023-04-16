import React from "react";
import "./NewCost.css";
import CostFrom from "./CostFrom";

export default function NewCost() {
  function saveCostDataHandler(inputCostData) {}

  return (
    <div className="new-cost">
      <CostFrom onSaveCostData={saveCostDataHandler} />
    </div>
  );
}
