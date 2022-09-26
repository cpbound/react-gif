import { Component } from 'react'
import './App.scss';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'></div>
        </div>
        <div className='right-scene'></div>
      </div>
    )
  }
}

export default App;
