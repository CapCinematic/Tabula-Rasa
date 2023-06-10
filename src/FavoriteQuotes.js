import React from "react";
import "./FavoriteQuotes.css";

function FavoriteQuotes({ favorites }) {
  const selectedQuotes = favorites.map((favorite) => {
    return (
      <div className="favorited-quotes" key={favorite._id}>
        <p>Author:{favorite.author}</p>
        <p>Quote:{favorite.content}</p>
      </div>
    );
  });

  return <div>{selectedQuotes}</div>;
}



export default FavoriteQuotes;
