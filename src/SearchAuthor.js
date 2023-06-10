import React, { Component } from "react";
import './SearchAuthor.css'
import FavoriteQuotes from "./FavoriteQuotes";
import { Link } from "react-router-dom";

class SearchAuthor extends Component {
    state = {
      authors : [],
      selectedAuthor: null,
      quotes: [],
      favorites: []
    };

    componentDidMount() {
      fetch('https://api.quotable.io/authors?sortBy=name&limit=20')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          authors: data.results,
        });
      })
      .catch((error) => {
        this.setState({ error })
      });
    };

    handleAuthorClick (author){
      fetch(`https://api.quotable.io/quotes?author=${author}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch quotes for ${author}`)
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          selectedAuthor: author,
          quotes: data.results
        });
      })
      .catch((error) => {
        this.setState({ error })
      });
    };

    handleFavorite(quote){
      this.setState({
        favorites: [...new Set([...this.state.favorites,quote])]
      })
    }
// whatever's here keep that, add new quote as well
    render() {
      const { authors, selectedAuthor, quotes , favorites } = this.state;

      return (
        <div>
          <h2 className="search-title">Select An author</h2>
          <aside className="authors-list">
            <ul>
              {authors.map((author) => (
                <li key={author._id}
                    onClick={() => this.handleAuthorClick(author.name)}>
                      {author.name}
                </li>
              ))}
            </ul>
          </aside>
          <div className="author-content">
            {selectedAuthor && (
              <span>
                <h3> Quotes by {selectedAuthor}</h3>
                <ul>
                  {quotes.map((quote) => (
                    <li key={quote._id}>"{quote.content}"    <button onClick={() => this.handleFavorite(quote)}>Favorite</button></li>

                  ))}
                </ul>
              </span>
            )}
          </div>
          <aside className="favorite-aside">
          {!!favorites.length && <FavoriteQuotes favorites={this.state.favorites}/>}
          </aside>
          <Link to='/'>
          <button className="home-button">Return Home</button>
          </Link>
        </div>
      )
    }
};



export default SearchAuthor