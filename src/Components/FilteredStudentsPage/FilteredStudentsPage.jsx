import React from 'react';
import './FilteredStudentsPage.css';


const FilteredStudentsPage = ({ filteredStudents }) => {
  return (
    <div>
      <h2>Filtered Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{`${student.attendance}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilteredStudentsPage;
