import React from "react";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./Costs.css";

import CostsFilter from "../CostsFilter/CostsFilter";
import { useState } from "react";
import CotstDiagram from "./CotstDiagram";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costsContent = <p>В этом году Расходов нет</p>;
  if (filteredCosts.length > 0) {
    costsContent = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CotstDiagram costs={filteredCosts} />
        {costsContent}
      </Card>
    </div>
  );
}
