import { CourseinfoPage } from './courseinfo/CourceInfoPage';
import { UniCafePage } from './unicafe/UniCafePage';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';
 import React from 'react';
import { AnecdotesPage } from './anecdotes/AnecdotesPage';
 
const App = () => {

  return (
    <Router>
      <div>
        <ul style={{display: 'flex', gap: '20px'}}>
          <li style={{listStyleType: 'none'}}><Link to='/courseinfo'>courseinfo</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/unicafe'>unicafe</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/anecdotes'>anecdotes</Link></li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/courseinfo' element={<CourseinfoPage />} />
        <Route exact path='/unicafe' element={<UniCafePage />} />
        <Route exact path='/anecdotes' element={<AnecdotesPage />} />
      </Routes>
    </Router>
  )
}

export default App
