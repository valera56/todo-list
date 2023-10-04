import React, { useContext, useEffect, useState } from "react";

import { todosContext } from "../../contexts/TodosContext";
import "./Commentary.css";
 interface ComentTodo {
  name: string,
  comment: string,
  id: number
}

function AddCommentary() {
  const { commentarys, getCommetaty, addComent , deleteComents } = useContext(todosContext);
  const [isCometyru, setIsCometyru] = useState(false);
  const [inpValueName, setInpValueName] = useState("");
  const [inpValueComent, setInpValueComent] = useState("");
  useEffect(() => {
    getCommetaty();
  }, []);





  const handleClick = () => {
    setIsCometyru(false);
    const obj = {
      name: inpValueName,
      comment: inpValueComent,
    };
    addComent(obj);
    getCommetaty();
  };

  return (
    <div className="add_coment">
      <ul className="ul_coment">
        {isCometyru ? (
          <div className="block_coment2">
            <input
              className="inpName"
              value={inpValueName}
              type="text"
              onChange={(e) => setInpValueName(e.target.value)}
              placeholder="name"
            />
            <input
              className="inpcommit"
              value={inpValueComent}
              type="text"
              onChange={(e) => setInpValueComent(e.target.value)}
              placeholder="commentary"
            />
            <button className="bnt_add" onClick={handleClick}>
              add
            </button>
            <button className="x" onClick={() => setIsCometyru(false)}>
              x
            </button>
          </div>
        ) : (
          <div className="block_add">
            <button className="bnt_com" onClick={() => setIsCometyru(true)}>
              commentary
            </button>
          </div>
        )}
        <div>
          {commentarys.map((todo: ComentTodo) => {
              return (
                  <div key={todo.id} className="list_coments">
                      <li className={"liCom"}>
                          <ul className="list_name">
                              <li className="li_name">{todo.id}</li>
                          </ul>
                          <ul className="lict_value">
                              <li className="li_coment">{todo.comment}</li>
                          </ul>
                      </li>
                  </div>
              )
          })}
        </div>
      </ul>

    </div>
  );
}

export default AddCommentary;
