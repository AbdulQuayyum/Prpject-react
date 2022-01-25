import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Data Subscription",
    amount: 3500,
    date: new Date(2022, 0, 1),
  },
  {
    id: "e2",
    title: "Projects",
    amount: 10000,
    date: new Date(2021, 11, 20),
  },
  {
    id: "e3",
    title: "Provision",
    amount: 7500,
    date: new Date(2021, 10, 28),
  },
  {
    id: "e4",
    title: "Drugs",
    amount: 1450,
    date: new Date(2022, 0, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
