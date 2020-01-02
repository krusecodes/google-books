import React, { Component } from 'react';
import './App.css'

import Header from './Header/header'
import Search from './Search/search'
import Filter from './Filter/filter'
import Results from './Results/results'

function App() {
  return (
    <main className='App'>
      <Header/>
      <Search/>
      <Filter/>
      <Results/>
    </main>
  );
}

export default App;
