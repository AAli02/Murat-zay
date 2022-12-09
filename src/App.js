import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer, Header, Prop, Projects } from './container';
import { Navbar, Modal } from './components';
import './App.css';

// const [openModal, setOpenModal] = useState(false)
const App = () => (
  
  <div>
    <Router>
      <Routes>
      <Route path="/Modal" element={<Modal Modal={Modal} />} />
      </Routes>
    </Router>
    <Navbar />
    <Header />
    <Prop />
    <Modal />
    <Projects />
    <Footer />
  </div>
);

export default App;
