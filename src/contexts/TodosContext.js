import axios from "axios";
import { createContext, useReducer } from "react";
import history from "../helpers/history";

export const todosContext = createContext();

const INITIAL_STATE = {
  todoData: [],
  limit: 4,
  page: 1,
  totalCount:0,

};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todoData: action.payload.data,
        totalCount: action.payload.totalCount,
      };

    case "ADD_TODOS":
      return { ...state, todoData: [...state.todoData, action.payload] };

    case "ADD_TODOS":
      return {
        ...state,
        todoData: state.todoData.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoData: state.todoData.filter((todo, id) => {
          if (todo.id == !id) {
            return todo;
          }
          return id;
        }),
      };

    

      case "SET_PAGE":
        return { ...state, page: action.payload };

    default:
      return state;
  }
};

const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getTodos = async () => {
    const { data , headers } = await axios(
      `http://localhost:8000/todos${history.location.search}`
    );

    dispatch({
      type: "GET_TODOS",
      payload: {
        data: data,
        totalCount: headers["x-total-count"]

      }
    });
  };

  const addTodo = async (obj) => {
    const { data } = await axios.post(`http://localhost:8000/todos`, obj);
    dispatch({
      type: "ADD_TODOS",
      payload: data,
    });
  };

  const editTodo = async (obj, id) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    dispatch({
    type: "EDIT_TODO",
      payload: data,
    });
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);

    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  

  const switchStatus = async (id, obj) => {
    await axios.patch(`http://localhost:8000/todos/${id}`, obj);
  };

  const setQuery = (key, value) => {
    const search = new URLSearchParams(history.location.search);
    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }
    history.push(`/todos?${search.toString()}`);
  };

  const searchFilter = (value) => {
    setQuery("q", value);
    getTodos();
  };

  const getPagination = (value) => {
    setQuery("_limit", state.limit);
    setQuery("_page", value);
    getTodos()
  };


  const setPage = (page) => {

    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  };

  const completeFilter = (value) => {
    setQuery("complete", value)
    getTodos()
  } 

  return (
    <todosContext.Provider
      value={{
        todoData: state.todoData,
        limit: state.limit,
        totalCount: state.totalCount,
        page: state.page,
        getTodos,
        addTodo,
        editTodo,
        deleteTodo,
        searchFilter,
        switchStatus,
        setPage,
        getPagination,
        completeFilter,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosContextProvider;
