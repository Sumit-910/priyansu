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
        { name: '12:00 PM', stepCount: 35, heartRate: 75, ruminating: 4, temperature: 36.0 },
        { name: '01:00 PM', stepCount: 40, heartRate: 78, ruminating: 5, temperature: 36.2 },
      ],
      'Week': [
        { name: 'Monday', stepCount: 80, heartRate: 76, ruminating: 8, temperature: 36.4 },
        { name: 'Tuesday', stepCount: 110, heartRate: 80, ruminating: 10, temperature: 36.6 },
      ]
    },
  };

  const personOptions = Object.keys(allData); // array for filter 1
  const timeOptions = ['Day', 'Week']; // array for filter 2

  const [selectedPerson, setSelectedPerson] = useState(personOptions[0]); //value for filter 1
  const [selectedTime, setSelectedTime] = useState(timeOptions[0]); //value for filter 2

  const filteredData = allData[selectedPerson][selectedTime]; // filtered data

  return (
    <div className="page">
      <div className="main-container">
        <h1>Data Visualization</h1>
        <div className="filter-container">
          <div className="filter">
            <label htmlFor="person">Select Person</label>
            <select id="person" value={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)}>
              {personOptions.map((person, index) => (
                <option key={index} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          <div className="filter">
            <label htmlFor="time">Select Time</label>
            <select id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
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