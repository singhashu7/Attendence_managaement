import React, { useState } from 'react';
import './Studentpage.css';
import FilteredStudentsPage from './FilteredStudentsPage/FilteredStudentsPage';


const Studentpage = () => {
  const [criteria, setCriteria] = useState('');
  

  const studentData = [
    { name: 'Ashutosh Singh', attendance: 80 },
    { name: 'Aman Srivastava', attendance: 60 },
    { name: 'Basant', attendance: 85 },
    { name: 'Ram', attendance: 90 },
    { name: 'Shyam', attendance: 55 },
    { name: 'Samson', attendance: 75 },
    { name: 'Jhonny', attendance: 85 },
    { name: 'Smith', attendance: 45 },
  ];

  const generateList = () => {
    const attendanceCriteria = parseFloat(criteria);
    if (isNaN(attendanceCriteria) || attendanceCriteria < 0 || attendanceCriteria > 100) {
      alert('Please enter a valid attendance criteria (between 0 and 100).');
      return;
    }

    const belowThresholdStudents = studentData.filter((student) => student.attendance < attendanceCriteria);

    
    console.log(belowThresholdStudents);
  };

  return (
    <div className='stdtable'>
      <div className='table'>
        <h2>Student Attendance</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{`${student.attendance}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='attendencebox'>
        <div className='attendencecontent'>
          <div className='content'>
            <div className='percentagebox'>
              <p>Enter the attendance Criteria</p>
              <input
                type='text'
                size='50'
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
              />
              %
            </div>
          </div>
        </div>
      </div>
      <div className='generatebtn'>
        <button onClick={generateList}>Generate</button>
      </div>
      {filteredStudents.length > 0 && (
        <div className='filteredStudents'>
          <h3>Students with Less Than {criteria}% Attendance</h3>
          <ul>
            {filteredStudents.map((student, index) => (
              <li key={index}>{student.name}</li>
            ))}
          </ul>
          {/* Navigate to the new page with filtered students */}
          <FilteredStudentsPage filteredStudents={filteredStudents} />
        </div>
      )}
    </div>
  );
};

export default Studentpage;
