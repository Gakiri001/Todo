import React from "react";
import "./Styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="text"
        placeholder="Enter a Task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
