import { ReactNode } from "react";
import "./style.css";

interface Props {
  children?: ReactNode;
}

const MyButton = ({ children, ...props }: Props) => {
  const {} = props;
  return <button className="control">{children}</button>;
};

export default MyButton;
