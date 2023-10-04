import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todosContext } from "../contexts/TodosContext";
import "./Home.css";
export default function Home() {
  const { logOut, isAuth, setisAuth, setUserEmail, userEmail , getTodos} =
    useContext(todosContext);

    useEffect(() => {
        getTodos()
    }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmailLs = localStorage.getItem("userEmail");
    if (token) {
      setisAuth(true);
      setUserEmail(userEmailLs);
    }
  }, []);



  const hendleClick = () => {
    logOut();
  };

  return (
    <div className="Home">
      <button className="add_btn">
        <Link to={"/todos"}>главная страница </Link>
      </button>
    </div>
  );
}
