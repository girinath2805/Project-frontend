// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Dashboard } from './Pages';
import { ForgotPassword, ResetPassword } from './Components';
import PrivateRoute from './routing/PrivateRoute';

const App = () => {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='login' element={<Login />} />
          <Route path='forgotpassword' element={<ForgotPassword />} />
          <Route path='resetpassword/:resetToken' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
