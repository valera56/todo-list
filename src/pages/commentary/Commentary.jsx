import React, { useContext, useState } from "react";
import { todosContext } from "../../contexts/TodosContext";
import "./Commentary.css";
function Commentary(props) {
  const { getCommetaty, deleteComents } = useContext(todosContext);

  const handleDeleteClick = () => {
    deleteComents(props.coment.id);
    getCommetaty();
  };

  return (
    <div className="list_coments">
      <li>
        <ul className="list_name">
          <li className="li_name">{props.coment.name}</li>
        </ul>
        <ul className="lict_value">
          <li className="li_coment">{props.coment.comment}</li>
          <button className="delete_btn" onClick={handleDeleteClick}>
            delete
          </button>
        </ul>
      </li>
    </div>
  );
}

export default Commentary;
