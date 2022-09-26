import './App.scss';
import Gif from './components/gif';
import GifList from './components/gifList';
import SearchBar from './components/searchBar';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "aaQFx0LmPavAUl2LcZ/giphy.gif?cid=ecf05e470sdsap1g3c9llpi8h7x6gyaerdb3zffgqw2067"
    }
  }

  search = (query) => {

  }

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} />
        </div>

      </div >
    )
  }
};

export default App;
