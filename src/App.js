//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ClassSchedule from './components/pages/ClassSchedule';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Demos from './components/pages/Demos';
import FollowAlong from './components/pages/FollowAlong';
import Blogs from './components/pages/Blogs';
import Merch from './components/pages/Merch';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/class-schedule" element={<ClassSchedule />} />
            <Route path="/demonstrations" element={<Demos />} />
            <Route path="/follow-along" element={<FollowAlong />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/blogs" element={<Blogs/>} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;