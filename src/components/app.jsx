import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "jUwpNzg9IcyrK/giphy.gif?cid=790b7611e7b8ac707b90a6f8164da6770e0d22ebbeb44b4d&rid=giphy"
    };
    // this.search('homer');
  }

  search = (query) => {
    giphy('h6pwgrQrVxnhd4c5yPUqysuoz7KaD8E6').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // console.log(result.data);
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
