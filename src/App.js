import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather SearchEngine</h1>
        <SearchEngine />
        <p>
          This code is{" "}
          <a
            className="App-link"
            href="https://github.com/antoniab79/Search-engine-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
          , coded by{" "}
          <a
            className="App-link"
            href="https://www.shecodes.io/graduates/109902-antonia-bezinovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antonia Bezinovic
          </a>{" "}
          and is on{" "}
          <a
            className="App-link"
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;