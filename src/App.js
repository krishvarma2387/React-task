import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    id: '',
    name: '',
    email: '',
  });

  
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
      .then((res) => res.json())
      .then((data) => {
        setColumns(Object.keys(data.users[0]));
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleAddRecord = () => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setNewRecord({
      id: '',
      name: '',
      email: '',
    });
  };

  return (
    <div className='Title'>
      <h1>Dynamic Table</h1>
      <div className='main'>
        <div className='InputField'>
          <form>
            {columns.map((col, i) => (
              <div key={i} className='mb-3'>
                <label className='form-label'>{col}</label>
                <input
                  type='text'
                  className='form-control'
                  name={col}
                  value={newRecord[col]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <button type='button' className='btn btn-primary' onClick={handleAddRecord}>
              Add Record
            </button>
          </form>
        </div>
        <table className='table'>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <tr key={i}>
                {columns.map((col, j) => (
                  <td key={j}>{record[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;


