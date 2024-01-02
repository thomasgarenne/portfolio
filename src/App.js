import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about';
import Home from './components/home';
import Layout from './components/UI/Layout';
import Contact from './components/contact';
import Detail from './components/detail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Contact />} path="/contact"/>
          <Route element={<About />} path="/about"/>
          <Route element={<Detail />} path="/detail/:id"/>
          <Route element={<Home />} path="/"/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
