import React, { useState } from "react";

import "./App.css";

// This holds a list of some fiction people
// Some  have the same phrase but different age and id
const Phrases = [
  { id: 1, phrase: "Andy", age: 32 },
  { id: 2, phrase: "Bob", age: 30 },
  { id: 3, phrase: "Tom Hulk", age: 40 },
  { id: 4, phrase: "Tom Hank", age: 50 },
  { id: 5, phrase: "Audra", age: 30 },
  { id: 6, phrase: "Anna", age: 68 },
  { id: 7, phrase: "Tom", age: 34 },
  { id: 8, phrase: "Tom Riddle", age: 28 },
  { id: 9, phrase: "Bolo", age: 23 },
];

function App() {
  // the value of the search field
  const [phrase, setPhrase] = useState("");

  // the search result
  const [foundPhrases, setFoundPhrases] = useState(Phrases);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = Phrases.filter((phrase) => {
        return phrase.phrase.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundPhrases(results);
    } else {
      setFoundPhrases(Phrases);
      // If the text field is empty, show all Phrases
    }

    setPhrase(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={phrase}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="phrase-list">
        {foundPhrases && foundPhrases.length > 0 ? (
          foundPhrases.map((phrase) => (
            <li key={phrase.id} className="phrase">
              <span className="phrase-id">{phrase.id}</span>
              <span className="phrase-phrase">{phrase.phrase}</span>
              <button>
                <span className="phrase-age">{phrase.age} </span>
              </button>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
