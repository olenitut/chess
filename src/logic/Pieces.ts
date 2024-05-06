import { Color, Rank, PieceType } from "../types";
import Position from "./Position";

export abstract class Piece {
  protected position: Position;
  isSelected: boolean = false;
  color: Color;

  constructor(color: Color, x: Rank, y: Rank) {
    this.color = color;
    this.position = new Position(x, y);
  }

  moveTo(position: Position) {
    if (this.canMoveTo(position)) {
      this.position = position;
    }
  }

  setIsSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }

  abstract canMoveTo(position: Position, topColor?: Color): boolean;
  abstract type: PieceType;
}

export class King extends Piece {
  type = PieceType.King;
  canMoveTo(position: Position) {
    const xDiff = this.position.getXDiff(position);
    const yDiff = this.position.getYDiff(position);

    return xDiff <= 1 && yDiff <= 1;
  }
}

export class Queen extends Piece {
  type = PieceType.Queen;
  canMoveTo(position: Position) {
    const diagonals = this.position.getDiagonals();
    const horizontals = this.position.getHorizontals();
    const possiblePositions = [...diagonals, ...horizontals];

    return possiblePositions.some((possiblePosition) =>
      possiblePosition.arePosiotionsEqual(position)
    );
  }
}

export class Bishop extends Piece {
  type = PieceType.Bishop;
  canMoveTo(position: Position) {
    const diagonals = this.position.getDiagonals();

    return diagonals.some((diagonal) => diagonal.arePosiotionsEqual(position));
  }
}

export class Knight extends Piece {
  type = PieceType.Knight;
  canMoveTo(position: Position) {
    const xDiff = this.position.getXDiff(position);
    const yDiff = this.position.getYDiff(position);

    return (xDiff === 1 && yDiff === 2) || (xDiff === 2 && yDiff === 1);
  }
}

export class Rook extends Piece {
  type = PieceType.Rook;
  canMoveTo(position: Position) {
    const horizontals = this.position.getHorizontals();

    return horizontals.some((horizontal) =>
      horizontal.arePosiotionsEqual(position)
    );
  }
}
export class Pawn extends Piece {
  type = PieceType.Pawn;
  isFirstMove = true;

  canMoveTo(position: Position, topColor: Color) {
    const yDiff =
      this.color === topColor
        ? position.getY() - this.position.getY()
        : this.position.getY() - position.getY();

    return yDiff === 1 || (yDiff === 2 && this.isFirstMove);
  }
}
