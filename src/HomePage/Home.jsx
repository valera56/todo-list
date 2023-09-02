import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { todosContext } from "../contexts/TodosContext";
import "./Home.css";
import history from "../helpers/history";
export default function Home() {
  const { logOut, isAuth, setisAuth, setUserEmail, userEmail } =
    useContext(todosContext);

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
      <button className="video_link">
        <Link to={"/video"}>Video</Link>
      </button>
      <button className="comenturu">
        <Link to={"/commentaryes"}>commentary</Link>
      </button>
      {isAuth ? (
        <div>
          {userEmail}
          <button className="but_log" onClick={hendleClick}>
            logOut
          </button>
        </div>
      ) : (
        <div className="logAut">
          <button className="button_register">
            <Link to={"/register"}>Регистрация</Link>
          </button>
          <button className="button_login">
            <Link to={"/login"}>Войти</Link>
          </button>
        </div>
      )}
    </div>
  );
}
