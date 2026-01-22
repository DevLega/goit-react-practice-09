import "./App.css";
import { Component } from "react";
import stickers from "./data/stickers.json";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";

class App extends Component {
  state = {
    activeSticker: null,
  };

  handleClick = (sticker) => {
    this.setState({ activeSticker: sticker });
  };

  render() {
    return (
      <div>
        <StickerList stickers={stickers} handleClick={this.handleClick} />
        {this.state.activeSticker && (
          <Choice sticker={this.state.activeSticker} />
        )}
      </div>
    );
  }
}

export default App;
