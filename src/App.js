import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Rohit Tiwari</p>
      </footer>
    </div>
  );
}

export default App;