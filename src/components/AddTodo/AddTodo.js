import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { addTodo } from '../../actions';
import configureStore from "redux-mock-store";
import AddTodoDefault, { AddTodo } from './AddTodo.js';

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo() {
  
  const [state, setState] = React.useState({
    title: '',
    description: '',
    place: '',
    date: ''
  })
  
  const handleFlecha = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const { title, description, place,date } = state
    dispatch(props.addTodo(title, description, place,date))

    // Si no puedo usar los hooks uso el connect como esta en el de clases y llamo a ese dispatch desde las props
    // props.addContact(name, phone, address)

    setState({
      title: '',
      description: '',
      place: '',
      date: ''
    })
  }

  return (
    <form>
      <h1>  Componente AddTodo</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>
            Title:
            </label>
          <input name="title" value={state.title} onChange={handleFlecha} />
        </div>
        <div>
          <label>
            Description:
            </label>
          <textarea name="description" value={state.description} onChange={handleFlecha} />
        </div>
        <div>
          <label>
            Place:
            </label>
          <input name="place" value={state.place} onChange={handleFlecha} />
        </div>
        <div>
          <label>
            Date:
            </label>
          <input name="date" value={state.date} onChange={handleFlecha} />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    
    </form>

  )
};

export default AddTodo

export default connect(mapStateToProps,{addTodo})(AddTodo)