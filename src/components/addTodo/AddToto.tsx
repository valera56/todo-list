import React, { useContext, useEffect, useState } from "react";
import { todosContext } from "../../contexts/TodosContext";
import TodoList from "../todoList/TodoList";
import "./AddTodo.css";
import SearchFilter from "../searchFilter/SearchFilter";

interface todo {
  id : number,
  text: string,
  title: string
}

function AddTodo() {
  const { todoData, getTodos, addTodo } = useContext(todosContext);
  const [inpValTitle, setInpValTitle] = useState("");
  const [inpValText, setInpValText] = useState("");
  const [inpValDataStart, setInpValDataStart] = useState("");
  const [inpValDataStop, setInpValDataStop] = useState("");
  const [inpValFile, setInpValFile] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);

  const arr: todo = todoData.map((todo: todo) => {
    return (
        todo
    )
  })

  const handleClick = () => {
    const obj = {
      title: inpValTitle,
      text: inpValText,
      dataStart: inpValDataStart,
      dataStop: inpValDataStop,
      file: inpValFile
    };
    addTodo(obj);
    getTodos();
    setInpValTitle("")
    setInpValText("")
    setInpValDataStop("")
    setInpValDataStart("")
    setInpValFile("")
    setIsEdit(false)
  };

  return (
    <div className="list">

        <h1 className={"logo"}>Восхождение в тени</h1>


      <div className="ul_todos">
        <SearchFilter />
        <ul>
          {isEdit ? (
              <div>
                <input
                    className="AddInp"
                    onChange={(e) => setInpValTitle(e.target.value)}
                    value={inpValTitle}
                    type="text"
                />
                <input
                    className="AddInp"
                    onChange={(e) => setInpValText(e.target.value)}
                    value={inpValText}
                    type="text"
                />
                <input
                    className="AddInp"
                    onChange={(e) => setInpValDataStart(e.target.value)}
                    value={inpValDataStart}
                    type="date"
                />
                <input
                    className="AddInp"
                    onChange={(e) => setInpValDataStop(e.target.value)}
                    value={inpValDataStop}
                    type="date"
                />
                <input
                    className="AddInp"
                    onChange={(e) => setInpValFile(e.target.value)}
                    value={inpValFile}
                    type="file"
                />
                <button className="btnAdd" onClick={handleClick}>
                  добавить
                </button>
              </div>
          ) :
              <div>
                <button className="btnOpen" onClick={() =>setIsEdit(true)}>
                  Создать
                </button>
                <TodoList/>
              </div>
          }
        </ul>
      </div>
    </div>
  );
}
export default AddTodo;
