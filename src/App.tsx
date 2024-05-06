import { useEffect, useState } from "react";
import { Game } from "./logic/Game";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [game] = useState(new Game());
  const board = game.board;
  const [key, setKey] = useState(0);

  useEffect(() => {
    game.subscribe(() => {
      setKey((prevKey) => prevKey + 1);
    });
  }, [game]);

  return (
    <div className="App" key={key}>
      {board && (
        <Board
          currentBoard={board}
          selectFn={game.selectPiece}
          key={JSON.stringify(board)}
        />
      )}
      <button onClick={game.startNewGame}>Start new game</button>
    </div>
  );
}

export default App;
