import React from 'react';


const Employee = (props) => {
  const {firstName, lastName, age:employeeAge} = props;
  return (
    <div>
      <p>Employee Name: {firstName} {lastName} | Age: {employeeAge}</p>
    </div>
  );
};

export default Employee;