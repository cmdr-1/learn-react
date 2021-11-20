import React from "react";
import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Harvard",
    age: "32",
    employeeId: "1"
  },
  {
    firstName: "George",
    lastName: "Carrefour",
    age: "23",
    employeeId: "2"
  },
  {
    firstName: "Alice",
    lastName: "York",
    age: "42",
    employeeId: "3"
  },
  {
    firstName: "Mohammed",
    lastName: "Ryerson",
    age: "34",
    employeeId: "4"
  },
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map(employee => {
          return <Employee key ={employee.employeeId} {...employee} />;
        })}

      </header>
    </div>
  );
}

export default App;
