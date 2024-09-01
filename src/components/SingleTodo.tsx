import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from "../model";
import "./Styles.css"

type Props ={
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}: Props) => {
  return (
    <form className="todo_single">
    <span className="todos_single--text">
      {todo.todo}
    </span>
    <div>
      <span className="icon"><MdEdit/></span>
      <span className="icon"><MdDelete/></span>
      <span className="icon"><MdOutlineDone/></span>
    </div>
  </form>
  )

};

export default SingleTodo;
