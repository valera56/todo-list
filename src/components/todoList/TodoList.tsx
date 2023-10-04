import React, {useContext, useEffect} from "react";
import { todosContext } from "../../contexts/TodosContext";
// @ts-ignore
import style from  './TodoList.module.css';
import {Link} from "react-router-dom";
interface todo {
  id : number,
  text: string,
  title: string
}
function TodoList() {

  const { todoData, getTodos } =
    useContext(todosContext);
  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div  className={style.list2}>
      {todoData.map((todo: todo) => {
        return (
            <li className={style.todo} key={todo.id}>
              <div className={style.listElem}>

                <div className={style.task}>
                  <p className={style.id}>{todo.id}</p>
                  <p className={style.title}>{todo.title}</p>
                  <p className={style.text}>{todo.text}</p>
                </div>
                <div>
                  <Link to={`/todo/${todo.id}`} >
                    <button className={style.BtnDelete}>
                      Подробнее
                    </button>
                  </Link>
                </div>
              </div>
            </li>
        )
      })}

    </div>
  );
}
export default TodoList;
