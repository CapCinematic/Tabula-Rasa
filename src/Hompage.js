import React , { Component } from "react";

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = { quote: {} }
  }

  componentDidMount (){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => this.setState({ quote: data }))
  }

  render(){
    const { quote } = this.state

    return (
      <section className="home-page">
      <h1>Welcome</h1>
      <div className="quote-box">
        {quote.content} - {quote.author}
      </div>
      <button className="enter-button">Enter</button>
    </section>
    )
  }
}

export default Homepage