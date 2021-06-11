import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";
import { App } from './App.js';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';

import Nav from './components/Nav/Nav';
// En este componente deberias cargar tus rutas.

function App(props) {
  return (
    
      <>
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/add" exact component={AddTodo} />
      
  </>
  );
}

export default App;
