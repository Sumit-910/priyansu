import './App.css';
import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function App() {
  const allData = {
    'Person 1': {
      'Day': [
        { name: '12:00 PM', stepCount: 12, heartRate: 80, ruminating: 5, temperature: 36.5 },
        { name: '01:00 PM', stepCount: 15, heartRate: 85, ruminating: 7, temperature: 36.8 },
      ],
      'Week': [
        { name: 'Monday', stepCount: 70, heartRate: 82, ruminating: 10, temperature: 36.6 },
        { name: 'Tuesday', stepCount: 90, heartRate: 87, ruminating: 15, temperature: 36.7 },
      ]
    },
    'Person 2': {
      'Day': [
        { name: '12:00 PM', stepCount: 22, heartRate: 88, ruminating: 6, temperature: 37.0 },
        { name: '01:00 PM', stepCount: 25, heartRate: 90, ruminating: 8, temperature: 37.3 },
      ],
      'Week': [
        { name: 'Monday', stepCount: 120, heartRate: 85, ruminating: 12, temperature: 37.1 },
        { name: 'Tuesday', stepCount: 100, heartRate: 92, ruminating: 13, temperature: 37.2 },
      ]
    },
    'Person 3': {
      'Day': [
        { name: '12:00 PM', stepCount: 18, heartRate: 82, ruminating: 7, temperature: 36.9 },
        { name: '01:00 PM', stepCount: 20, heartRate: 86, ruminating: 9, temperature: 37.2 },
      ],
      'Week': [
        { name: 'Monday', stepCount: 100, heartRate: 84, ruminating: 11, temperature: 37.0 },
        { name: 'Tuesday', stepCount: 105, heartRate: 89, ruminating: 14, temperature: 37.3 },
      ]
    },
  };

  const [selectedPerson, setSelectedPerson] = useState('Person 1');
  const [selectedTime, setSelectedTime] = useState('Day');

  const filteredData = allData[selectedPerson][selectedTime];

  return (
    <div className="page">
      <div className="main-container">
        <h1>Data Visualization</h1>
        <div className="filter-container">
          <div className="filter">
            <label htmlFor="person">Select Person</label>
            <select id="person" value={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)}>
              <option value="Person 1">Person 1</option>
              <option value="Person 2">Person 2</option>
              <option value="Person 3">Person 3</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="time">Select Time</label>
            <select id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="Day">Day</option>
              <option value="Week">Week</option>
            </select>
          </div>
        </div>

        <div className="graph-container">
          <LineChart width={730} height={250} data={filteredData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stepCount" stroke="#4CAF50" name="Step Count" />
            <Line type="monotone" dataKey="heartRate" stroke="#FF5722" name="Heart Rate" />
            <Line type="monotone" dataKey="ruminating" stroke="#2196F3" name="Ruminating" />
            <Line type="monotone" dataKey="temperature" stroke="#9C27B0" name="Temperature" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default App;