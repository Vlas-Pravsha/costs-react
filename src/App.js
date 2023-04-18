import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCosts/NewCost";
function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      id: "c3",
      date: new Date(2021, 2, 12),
      description: "Джинсы",
      amount: 49.99,
    },
  ];

  const addCosthandler = (cost) => {
    console.log(cost);
    console.log("App");
  };
  return (
    <div>
      
      <NewCost onAddCost={addCosthandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
