
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Navbar from './Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Studentpage from './Components/Studentpage/Studentpage';
import FilteredStudentsPage from './Components/FilteredStudentsPage/FilteredStudentsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/student" element={<Studentpage />} />
        <Route path='/filteredStudents' element={<FilteredStudentsPage />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
