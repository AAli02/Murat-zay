import React from 'react';

import { Footer, Header, Prop } from './container';
import { Navbar, Modal } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Footer />
    <Prop />
    <Modal />
  </div>
);

export default App;
