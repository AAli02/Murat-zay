import React from 'react';

import { Footer, Header, Prop, Projects } from './container';
import { Navbar, Modal } from './components';
import './App.css';

// const [openModal, setOpenModal] = useState(false)
const App = () => (
  
  <div>
    <Navbar />
    <Header />
    <Prop />
    <Modal />
    <Projects />
    <Footer />
  </div>
);

export default App;
