import { useContext, useEffect, useState } from "react";
import { todosContext } from "../contexts/TodosContext";
import history from "../helpers/history";

const FilterTodo = () => {
  const getComlpeteValue = () => {
    const search = new URLSearchParams(history.location.search);
    return search.get("complete");
  };

  const { completeFilter } = useContext(todosContext);
  const [completed, setCompleted] = useState(getComlpeteValue());

  useEffect(() => {
    completeFilter(completed);
  }, [completed]);

  return (
    <div className="filter_block">
      <li>
        <input
          type="radio"
          name="completed"
          onClick={() => {
            setCompleted("");
          }}
        />
        all
      </li>
      <li>
        <input
          defaultChecked={completed === "true"}
          type="radio"
          name="completed"
          onClick={() => {
            setCompleted("true");
          }}
        />
        completed
      </li>
      <li>
        <input
          defaultChecked={completed === "false"}
          type="radio"
          name="completed"
          onClick={() => {
            setCompleted("false");
          }}
        />
        not completed
      </li>
    </div>
  );
};
export default FilterTodo;
