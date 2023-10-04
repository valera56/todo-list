import React from 'react'
import TodosContextProvider from './contexts/TodosContext';
import AddTodo from './components/addTodo/AddToto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage/Home';
import Task from "./components/Task/Task";
export default function MainRoutes() {
  return (
    <div>
      <BrowserRouter>
        <TodosContextProvider>
          <Home />
          <Switch>
            <Route exact path="/todos/" >
              <AddTodo />
            </Route>
            <Route exact path="/todo/:id">
              <Task />
            </Route>
          </Switch>
        </TodosContextProvider>
      </BrowserRouter>
    </div>
  )
}
