import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { store } from './redux/store';
import VisitorCount from './components/CounterDisplay/VisitorCount';
import { Provider } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Provider store={store}> 
      <div className={styles.App}>
        <Router>
          <Routes>
            <Route path="/" element={<><Navbar /><Hero /><VisitorCount /><About /><Experience /><Projects /><Contact /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/experience" element={<><Navbar /><Experience /></>} />
            <Route path="/projects" element={<><Navbar /><Projects /></>} />
            <Route path="/api/contact" element={<><Navbar /><ContactForm /></>} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
