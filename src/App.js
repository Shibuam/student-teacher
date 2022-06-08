
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard';
import {Student} from './pages/Student'
import {Teacher} from './pages/Teacher'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={  <Login />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path ='/student' element={<Student/>}/>
          <Route path ='/teacher' element={<Teacher/>}/>
  
        </Routes>
      </Router>

    </div>
  );
}

export default App;
