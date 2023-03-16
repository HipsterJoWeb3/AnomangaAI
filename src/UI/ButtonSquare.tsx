import { FC } from "react";

interface ButtonSquareType {
  classes?: string;
  children?: any;
}

const ButtonSquare: FC<ButtonSquareType> = ({ classes, children }) => {
  return <button className={`bg-black rounded ${classes}`}>{children}</button>;
};

export default ButtonSquare;
