import { Rook, King, Queen, Knight, Bishop, Pawn, Piece } from "./Pieces";
import { Color, Rank, Board } from "../types";
import { createBoard } from "../utils";

export class Game {
  board: null | Board = null;
  topColor: Color = "black";
  currentPlayer: Color = "black";
  selectedPiece: null | Piece = null;

  subscriptions: (() => void)[] = [];

  startNewGame = () => {
    const newColor = this.topColor === "black" ? "white" : "black";
    this.topColor = newColor;
    this.currentPlayer = newColor;

    this.board = createBoard();

    //KINGS
    this.board[0][4] = new King("white", 0, 4);
    this.board[7][4] = new King("black", 7, 4);

    //QUEENS
    this.board[0][3] = new Queen("white", 0, 3);
    this.board[7][3] = new Queen("black", 7, 3);

    //ROOKS
    this.board[0][0] = new Rook("white", 0, 0);
    this.board[0][7] = new Rook("white", 0, 7);
    this.board[7][0] = new Rook("black", 7, 0);
    this.board[7][7] = new Rook("black", 7, 7);

    //KNIGHTS
    this.board[0][1] = new Knight("white", 0, 1);
    this.board[0][6] = new Knight("white", 0, 6);
    this.board[7][1] = new Knight("black", 7, 1);
    this.board[7][6] = new Knight("black", 7, 6);

    //BISHOPS
    this.board[0][2] = new Bishop("white", 0, 2);
    this.board[0][5] = new Bishop("white", 0, 5);
    this.board[7][2] = new Bishop("black", 7, 2);
    this.board[7][5] = new Bishop("black", 7, 5);

    //PAWNS
    for (let i = 0; i <= 7; i++) {
      this.board[1][i] = new Pawn("white", 1, i as Rank);
      this.board[6][i] = new Pawn("black", 6, i as Rank);
    }

    this.callSubscriptions();
  };

  selectPiece = (piece: Piece) => {
    if (piece.color === this.currentPlayer) {
      this.selectedPiece?.setIsSelected(false);
      piece.setIsSelected(true);
      this.selectedPiece = piece;
    }
    this.callSubscriptions();
  };

  subscribe = (fn: () => void) => {
    this.subscriptions.push(fn);
  };
  callSubscriptions = () => {
    this.subscriptions.forEach((fn) => fn());
  };
}
