import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import SignupForm from './components/SignupForm/SignupForm'; 
import { store } from './redux/store';
import VisitorCount from './components/CounterDisplay/VisitorCount';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}> 
    <div className={styles.App}>
      
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<><Hero /><VisitorCount /><About /><Experience /><Projects /><Contact /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
      </div>
      </Provider>
    
  );
}

export default App;
