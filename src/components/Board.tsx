import { Piece } from "../logic/Pieces";
import { Board as BoardType } from "../types/Board";
import Cell from "./Cell";

type Props = {
  currentBoard: BoardType;
  selectFn: (piece: Piece) => void;
};

const Board = ({ currentBoard, selectFn }: Props) => {
  return (
    <div>
      {currentBoard.map((row, i) => {
        return (
          <div className="row">
            {row.map((cell, j) => {
              return (
                <Cell element={cell} select={() => cell && selectFn(cell)} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
