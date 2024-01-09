import React from 'react';
import './Homepage.css';

class college extends React.Component {
    render() {
        return (
            <div className="option-container">
                <div className="box">
                <form>
                    <label for="course">Select Course:</label>
                    <select id="course" name="course">
                        <option value="none" selected display hidden>Course</option>
                        <option value="cs">MCA</option>
                        <option value="math">MBA</option>
                        <option value="btech">BTECH</option>
                        <option value="bpharma">B.PHARMA</option>
                    </select>

                    <label for="semester">Select Semester:</label>
                    <select id="semester" name="semester">
                        <option value="none" selected display hidden>Semester</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>

                    </select>
                    <div className="btn">
                    <button >Search</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
        );
    }
}

export default college;