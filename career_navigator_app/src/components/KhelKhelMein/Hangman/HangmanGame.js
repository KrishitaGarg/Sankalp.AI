import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HangmanCanvas from "./HangmanCanvas";
import "./HangmanGame.css";

const HangmanGame = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    resetGame();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      const data = await response.json();
      return data[0].toUpperCase();
    } catch (error) {
      console.error("Failed to fetch word:", error);
      return "DEFAULT";
    }
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return mistakes >= 6;
  };

  const resetGame = async () => {
    const newWord = await fetchRandomWord();
    setWord(newWord);
    setGuessedLetters([]);
    setMistakes(0);
  };

  return (
    <div className="hangman-container">
      <div className="header">
        <h1>HANGMAN</h1>
        <button
          className="quit-button"
          onClick={() => navigate("/dashboard")}
        >
          Quit
        </button>
      </div>
      <HangmanCanvas mistakes={mistakes} />
      <div className="word-display">
        {word.split("").map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
      <div className="keyboard">
        {Array.from(Array(26)).map((_, index) => (
          <button
            key={index}
            onClick={() => handleGuess(String.fromCharCode(65 + index))}
            disabled={guessedLetters.includes(String.fromCharCode(65 + index))}
          >
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      {isGameWon() && <p className="result-message">You won!</p>}
      {isGameLost() && (
        <p className="result-message">You lost! The word was: {word}</p>
      )}
      <button className="new-game-button" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
};

export default HangmanGame;
