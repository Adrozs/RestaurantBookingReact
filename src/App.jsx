import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Reservation from './Reservation';

function App() {

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/reservation' element={<Reservation />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
