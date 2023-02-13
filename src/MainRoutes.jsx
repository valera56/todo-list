import React from 'react'
import Img1 from './components/Img1';
import TodosContextProvider from './contexts/TodosContext';

import AddTodo from './components/AddToto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Home from './HomePage/Home';
import AddVideo from './pages/AddVideo';

import AddCommentary from './pages/commentary/AddCommentary';
export default function MainRoutes() {
  return (
    <div>
      <BrowserRouter>
        <TodosContextProvider>
          <Home />
        
          <Switch>
            <Route exact path="/todos" >
              < Img1 />
              <AddTodo />
            </Route>
            <Route exact path="/register" >
              <Register />
            </Route>

            <Route exact path="/login" >
              <Login />
            </Route>
            
            <Route exact path="/video">
             <AddVideo />
            </Route>
            <Route exact path="/commentaryes" >
              < AddCommentary />
            </Route  >

          </Switch>
        </TodosContextProvider>
      </BrowserRouter>
    </div>
  )
}
