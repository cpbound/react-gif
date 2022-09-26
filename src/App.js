import { Component } from 'react'
import './App.scss';
import Gif from './components/gif';
import GifList from './components/gifList';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id="aaQFx0LmPavAUl2LcZ/giphy.gif?cid=ecf05e470sdsap1g3c9llpi8h7x6gyaerdb3zffgqw2067" />
          </div>
        </div>
        <div className='right-scene'></div>
        <GifList />
      </div>
    )
  }
}

export default App;
