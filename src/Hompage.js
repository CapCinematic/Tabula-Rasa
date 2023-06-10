import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomepagePropTypes } from "./PropTypes";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: {} };
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ 
          quote: data 
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Failed to data for Quotes" });
      });
  }

  render() {
    const { quote } = this.state;

    return (
      <section className="home-page">
        <h1>Welcome</h1>
        <div className="quote-box">
          {quote.content} - {quote.author}
        </div>
        <Link to="/search">
          <button className="enter-button">Enter</button>
        </Link>
      </section>
    );
  }
}

Homepage.propTypes = HomepagePropTypes;

export default Homepage;
