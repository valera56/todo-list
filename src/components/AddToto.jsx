import React, { useContext, useEffect, useState } from "react";
import { todosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";
import "./AddTodo.css";
import SearchFilter from "./SearchFilter";
import FilterTodo from "./FilterTodo";
import Plaginetion from "./Plaginetion";
import { Link } from "react-router-dom";

function AddTodo() {
  const { todoData, getTodos, addTodo } = useContext(todosContext);
  const [inpVal, setInpVal] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const handleClick = () => {
    const obj = {
      complete: false,
      task: inpVal,
    };
    addTodo(obj);
    getTodos();
  };

  return (
    <div className="list">
      <div className="bag_video">
        <img
          className="bag_video_1"
          src="https://images3.alphacoders.com/783/783076.jpg"
          alt=""
        />
      </div>

      <div className="ul_todos">
        <SearchFilter />
        <FilterTodo />
        <ul>
          <input
            className="AddInp"
            onChange={(e) => setInpVal(e.target.value)}
            value={inpVal}
            type="text"
          />
          <button className="btnAdd" onClick={handleClick}>
            добавить
          </button>
          {todoData.map((todo) => {
            return <TodoList todo={todo} key={todo.id} />;
          })}
        </ul>
        <Plaginetion />
      </div>
    </div>
  );
}
export default AddTodo;
