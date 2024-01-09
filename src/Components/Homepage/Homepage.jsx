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
                        <option value="cs">MCA</option>
                        <option value="math">MBA</option>
                        <option value="eng">BTECH</option>
                        <option value="eng">B.PHARMA</option>
                    </select>

                    <label for="semester">Select Semester:</label>
                    <select id="semester" name="semester">
                        <option value="spring">1</option>
                        <option value="summer">2</option>
                        <option value="fall">3</option>
                        <option value="winter">4</option>

                    </select>
                    <div className="btn">
                    <button>Search</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
        );
    }
}

export default college;