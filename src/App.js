import React from 'react';

import { Footer, Header, Prop } from './container';
import { Navbar, Modal } from './components';
import './App.css';

// const [openModal, setOpenModal] = useState(false)
const App = () => (
  
  <div>
    <Navbar />
    <Header />
    <Prop />
    <Modal />
    <Footer />
  </div>
);

export default App;
