import React from "react";

function FavoriteQuotes({ favorites }) {
  const selectedQuotes = favorites.map((favorite) => {
    return (
      <span className="favorited-quotes" key={favorite._id}>
        <br></br>
        <br></br>
        <p>Author: {favorite.author}</p>
        <br></br>
        <br></br>
        Quote: " {favorite.content} "
      </span>
    );
  });

  return <div>{selectedQuotes}</div>;
}



export default FavoriteQuotes;
