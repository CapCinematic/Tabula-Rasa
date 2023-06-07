import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [philosophers, setPhilosopher] = [];
  const [error, setError] = "";

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  useEffect(() => {
    fetch(`https://philosophyapi.pythonanywhere.com/api/philosophers/1/`)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => setPhilosopher(data))
      .then(console.log(setPhilosopher, "data"))
      .catch((error) => setError(`Error: ${error}`));
  }, [setPhilosopher]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul> {philosophers}
          {/* {philosophers.map((philosopher) => (
            <div key={philosopher.id}>
              <h2>{philosopher.name}</h2>
              <img src={philosopher.photo} alt={philosopher.name} />
              <p>Born: {philosopher.born_date}</p>
              <p>Died: {philosopher.death_date}</p>
              <p>Nationality: {philosopher.nationality}</p>
              <p>Era: {philosopher.era}</p>
              <p>Schools: {philosopher.school.join(", ")}</p>
              <p>Ideas: {philosopher.ideas.join(", ")}</p>
              <p>Books: {philosopher.books.join(", ")}</p>
            </div> 
          ))} */}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
