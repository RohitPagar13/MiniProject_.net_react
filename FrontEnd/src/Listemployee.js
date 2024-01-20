import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [selectedOption, setSelectedOption] = useState(''); // Step 1
  const chks = sessionStorage.getItem('key');
  const navigate = useNavigate();

  useEffect(() => {
    if (chks === null) navigate('/');
  }, []);

  useEffect(() => {
    fetch('https://localhost:7115/api/Employee')
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Step 2
  };

  return (
    <div>
      <label>
        Which Employee you want?
        <select value={selectedOption} onChange={handleChange}>
          <option value="Apps">Apps</option>
          <option value="Rohit">Rohit</option>
          <option value="Raj">Raj</option>
        </select>
      </label>

      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            selectedOption === emp.name
              ? (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                </tr>
              )
              : null
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;
