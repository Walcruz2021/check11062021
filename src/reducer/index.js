import reducer from './index';
import { addTodo, removeTodo, toInProgress, toDone } from '../actions';


const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch(action.type) {
    // Aca va tu codigo;
    case addTodo:
  //title, description, place, date, id y un status;
      return{todos:[...state.todos, action.payload]}
    case removeTodo:
      return {...state, m: state.m.concat(action.payload)}; 
    default:
            return state;
  }
}

export default todos;
