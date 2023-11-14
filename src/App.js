// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/reset.css';
import Feedback from './pages/FeedBack';
import Submission from './pages/Submission';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bookingcar' element={<BookingCar />} />
          <Route path = '/feedbackform' element={< Feedback/>} />
          <Route path='/submissions' element ={<Submission/>} />
          <Route path='/about' element={<About/>} />
          <Route path="submission/:id" element={<Submission />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

