import { Board } from "../types/Board";

export const createBoard = () =>
  Array(8)
    .fill("")
    .map(() => Array(8).fill(null));
