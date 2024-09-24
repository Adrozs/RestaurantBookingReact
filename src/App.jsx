import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Reservation from './Reservation';
import Test from './test';

import './App.css'

function App() {

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/test' element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
