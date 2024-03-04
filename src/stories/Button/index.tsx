import { Button as TodoListButton } from "../../ui/button";
import { ButtonListProps } from "./types";

const ButtonList = ({ variant, size, text, func }: ButtonListProps) => {
  return (
    <TodoListButton variant={variant} size={size} onClick={func}>
      {text}
    </TodoListButton>
  );
};

export default ButtonList;
