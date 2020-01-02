import React, { Component } from 'react';
import './App.css'
import Header from './Header/header'
import Search from './Search/search'
import Filter from './Filter/filter'
import Results from './Results/results'
import { render } from '@testing-library/react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    };
  }

  componentDidMount() {
    console.log('hello');
    const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor&key=';

    

    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.items);
      
      this.setState({
        books: data.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });

  }

    render() {
      return (
        <main className='App'>
          <Header/>
          <Search/>
          <Filter/>
          <Results/>
        </main>
      );
    }

}

// function App() {
//   return (
//     <main className='App'>
//       <Header/>
//       <Search/>
//       <Filter/>
//       <Results/>
//     </main>
//   );
// }

export default App;
