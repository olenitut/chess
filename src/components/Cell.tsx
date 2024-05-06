import { Piece } from "../logic/Pieces";
import classNames from "classnames";

type Props = {
  element: Piece | null;
  select: () => void;
};

const Cell = ({ element, select }: Props) => {
  console.log(element);
  return (
    <div
      className={classNames("cell", element?.isSelected && "selected")}
      onClick={select}
    >
      {element ? element.type : ""}
    </div>
  );
};

export default Cell;
