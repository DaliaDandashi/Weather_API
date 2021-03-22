import React from "react";

//import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="header">
        <form onSubmit={this.props.getData}>
        <input
          type="text"
          id="input-name"
          name="city"
          
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
        </form>
      </div>
    );
  }
}
export default Search;
