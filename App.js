import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import staffData from './staff.json'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Attendance from './components/Attendance';
import Studentdetails from './components/Studentdetails';
import SignIn from './components/SignIn';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [staffDetails, setStaffDetails] = useState();

  const login = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please enter username and password');
      return;
    }
    const usernameExists = staffData.some(staff => staff.username === username) && staffData.some(staff => staff.pword === password);
    const data = staffData.find(staff => staff.username === username);
    setStaffDetails(data);
    if (usernameExists) {
      const matchingStaff = staffData.find(staff => staff.username === username && staff.pword === password);
      // const matchingStaffId = matchingStaff ? matchingStaff.id : null;
      setLoggedIn(true);
    } else {
      alert('Please enter correct username and password');
      return;
      setLoggedIn(false);
    }
  }
  console.log('Rendering App...');

  return (
    <Router>
      <div className={` ${loggedIn ? 'flex' : 'flex items-center justify-center h-[100vh]'} `}>
        <Routes>
          <Route
            exact
            path='/'
            element={
              loggedIn ? (
                <Dashboard data={staffDetails} loggedIn={loggedIn} setLoggedIn={setLoggedIn} password={password} setPassword={setPassword} />
              ) : (
                <Login
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  login={login}
                />
              )
            }
          />
        </Routes>
        <SignIn />
      </div>
    </Router>

  )
}

export default App