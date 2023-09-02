import React, { useContext, useEffect, useState } from "react";
import { todosContext } from "../contexts/TodosContext";
import "./AddTodo.css";
function TodoList(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(props.todo.task);
  const [switchValue, setSwitchValue] = useState(props.todo.complete);
  const { editTodo, deleteTodo, getTodos, switchStatus } =
    useContext(todosContext);
  const handleSaveClick = () => {
    const editObj = {
      task: editValue,
    };
    editTodo(editObj, props.todo.id);
    setIsEdit(false);
    getTodos();
  };

  const handleDeleteClick = () => {
    deleteTodo(props.todo.id);
    getTodos();
  };

  const handeChangeStatus = (e) => {
    setSwitchValue(e.target.checked);
    const switchObj = {
      complete: !switchValue,
    };
    switchStatus(props.todo.id, switchObj);
  };

  return (
    <div className="list2">
      <li>
        <input
          checked={switchValue}
          type="checkbox"
          onChange={handeChangeStatus}
        />
        {isEdit ? (
          <div>
            <input
              className="InpEdit"
              value={editValue}
              type="text"
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button className="BtnSave" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        ) : (
          <div>
            {props.todo.task}
            <button className="BtnEdit" onClick={() => setIsEdit(true)}>
              Edit
            </button>
          </div>
        )}

        <button className="BtnDelete" onClick={handleDeleteClick}>
          delite
        </button>
      </li>
    </div>
  );
}
export default TodoList;
