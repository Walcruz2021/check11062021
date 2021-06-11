import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

import Todos from './Todos';
import Todo from '../Todo/Todo';


export function Todos() {

  const contacts = useSelector(state => state.contacts)
  return (
    <div>
      <ul>
          {contacts.map(todito =><Todo 
              key= {todito.id}
              id={todito.id}
              title={todito.id}
              description={todito.description}
              place={todito.splace}
              date={todito.date}
              status={todito.status}
          />)}
           <span>
              Status:
           </span>
           <span>
              {props.status}
           </span> 
           <Link to={`/todito/${todito.id}`}>
                          {todito.title}
           </Link>   
        </ul>
    </div>
    
  )
};

export default Todos;