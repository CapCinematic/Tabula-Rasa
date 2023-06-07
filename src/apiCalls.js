import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [Objects, setObjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes")
      .then((response) => response.json())
      .then((data) => setObjects(data))
      .catch((error) => setError(`Error: ${error}`));
    }, []);
    
    return (
      <div>
      {error ? (
        <p>{error}</p>
        ) : (
          <p>
         Objects {Objects.count}
        </p>
      )}
    </div>
  );
};


export default FetchData;