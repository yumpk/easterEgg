import React from "react";
import "../App.css";

class Homepage extends React.Component {
  handleClick = () => {
    this.props.changePage();
    // this.setState({ page: this.props.page });
  };

  render() {
    return (
      <div>
        <img
          className="home-picture"
          src="https://image.noelshack.com/fichiers/2019/16/4/1555605358-4e4b65d79289fb48fe92e8fbeedba52e.jpg"
          alt=""
        />
        <h1>Find the perfect match and discover the perfect egg</h1>
        <button class="button" onClick={this.handleClick}>
          Let's go!
        </button>
      </div>
    );
  }
}
export default Homepage;
