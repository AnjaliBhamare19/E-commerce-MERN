import React from 'react';
import Navbar from './components/ANavbar/Navbar';
import Sidebar from './components/ASidebar/Sidebar';
import './App.css'; // Ensure you import your CSS file

const App = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>

    </div>
  );
}

export default App;
