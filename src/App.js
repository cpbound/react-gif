import './App.scss';
import Gif from './components/gif';
import GifList from './components/gifList';
import SearchBar from './components/searchBar';
import { Component } from 'react';
import giphy from "giphy-api"

const GIPHY_API_KEY = "MD9dBlZuTK7ERdjT7zv4nbtjw48g8sSL"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "aaQFx0LmPavAUl2LcZ/giphy.gif?cid=ecf05e470sdsap1g3c9llpi8h7x6gyaerdb3zffgqw2067"
    };

    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
    fetch(endpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
      console.log(gifs)
    })
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} selectedGif={this.selectGif} />
        </div>

      </div >
    );
  }
}

export default App;
