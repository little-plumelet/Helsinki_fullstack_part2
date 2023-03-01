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
import { PhonebookPage } from './phonebook/PhonebookPage';
import { CountriesPage } from './countries/CountriesPage';
import { CountriesPageDebounceHook } from './countries/CountriesPageDebounceHook';
 
const App = () => {

  return (
    <Router>
      <div>
        <ul style={{display: 'flex', gap: '20px'}}>
          <li style={{listStyleType: 'none'}}><Link to='/courseinfo'>courseinfo</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/unicafe'>unicafe</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/anecdotes'>anecdotes</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/phonebook'>phonebook</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/countries'>countries</Link></li>
          <li style={{listStyleType: 'none'}}><Link to='/countriesDebounce'>{'countries with hook'}</Link></li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/courseinfo' element={<CourseinfoPage />} />
        <Route exact path='/unicafe' element={<UniCafePage />} />
        <Route exact path='/anecdotes' element={<AnecdotesPage />} />
        <Route exact path='/phonebook' element={<PhonebookPage />} />
        <Route exact path='/countries' element={<CountriesPage />} />
        <Route exact path='/countriesDebounce' element={<CountriesPageDebounceHook />} />
      </Routes>
    </Router>
  )
}

export default App
