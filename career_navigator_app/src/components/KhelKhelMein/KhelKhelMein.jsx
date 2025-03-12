import React from "react";
import { useNavigate } from "react-router-dom";
import "./KhelKhelMein.css";
import scrabbleImg from "../../assets/scrabble.png";
import snakesLadderImg from "../../assets/snakes_ladder.png";
import treasureHuntImg from "../../assets/treasure_hunt.png";
import hangmanImg from "../../assets/hangman.png";

const games = [
  { name: "Scrabble", img: scrabbleImg, path: "/scrabble" },
  { name: "Snakes n Ladder", img: snakesLadderImg, path: "/snakes-ladder" },
  { name: "Treasure Hunt", img: treasureHuntImg, path: "/treasure-hunt" },
  { name: "Hangman", img: hangmanImg, path: "/hangman" },
];

const KhelKhelMein = () => {
  const navigate = useNavigate();

  return (
    <div className="khel-container">
      <div className="games-section">
        
        <div className="games-grid">
          {games.map((game, index) => (
            <div
              key={index}
              className="game-card"
              onClick={() => navigate(game.path)}
            >
              <img src={game.img} alt={game.name} />
              <div className="game-title">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        {/* Leaderboard content */}
      </div>
    </div>
  );
};

export default KhelKhelMein;
