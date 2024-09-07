import React from 'react';
import LoginForm from './components/Auth/Login.js';
import SignUpForm from './components/Auth/Signup.js';
import HomePage from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
          {/* <Route path="/" element={<HomePage />} />  
        <Route path="/login" element={<LoginForm />} />  
        <Route path="/signup" element={<SignUpForm />} />   */}

        {/* <LoginForm/>
        <SignUpForm/> */}
        <HomePage/>
            </div>
    );
}

export default App;
