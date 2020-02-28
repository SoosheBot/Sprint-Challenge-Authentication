import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const JokesList = props => {
    const [jokes, setJokes] = useState([]);
  
    useEffect(() => {
      axiosWithAuth()
        .get("/api/jokes")
        .then(response => {
          setJokes(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    }, []);
  
    return (
      <div className="jokes-page">
        <header>
              <div>
                <h1>Jokes</h1>
              </div>
              <nav>
                <a
                  href="https://www.google.com"
                  target="_blank" rel="noopener noreferrer"
                  alt="Click to visit the homepage."
                >
                  Home
                </a>
                <Link to="/add-jokes">Add Jokes</Link>
                <Link to="/login">Log Out</Link>
              </nav>
        </header>
  
          <main>
            {jokes &&
              jokes.map(joke => {
                return (
                  <div key={joke.id} joke={joke}>
                    <h1>ID:{joke.id}</h1>
                    <h3>Joke:{joke.joke}</h3>
                  </div>
                );
              })}
          </main>
      </div>
    );
  };
  
  export default JokesList;