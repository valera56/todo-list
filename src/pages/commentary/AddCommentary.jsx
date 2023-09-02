import React, { useContext, useEffect, useState } from "react";

import { todosContext } from "../../contexts/TodosContext";
import Commentary from "./Commentary";
import "./Commentary.css";

function AddCommentary() {
  const { commentarys, getCommetaty, addComent } = useContext(todosContext);
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
        {commentarys.map((coment) => {
          return <Commentary coment={coment} key={coment.id} />;
        })}
      </ul>

    </div>
  );
}

export default AddCommentary;
