import React, { Component } from "react";
import './SearchAuthor.css'

class SearchAuthor extends Component {
    state = {
      authors : [],
      selectedAuthor: null,
      quotes: [],
      favorites: []
    };

    componentDidMount() {
      fetch('https://api.quotable.io/authors?sortBy=name&limit=10')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          authors: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    };

    handleAuthorClick (author){
      fetch(`https://api.quotable.io/quotes?author=${author}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          selectedAuthor: author,
          quotes: data.results
        });
      })
      .catch((error) => {
        console.log(error);
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
          <h2 className="search-title">Choose An author</h2>
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
          <div>
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
          {/* {favorites.length && <FavoriteQuotes favorites={this.state.favorites}/>} */}
        </div>
      )
    }
};



export default SearchAuthor