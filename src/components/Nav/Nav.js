import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



export function Nav() {
  return (
    <nav>
      <div>
       Componente Nav
      </div>
         <Link exact to="/" >TODOS</Link>
         <Link to="/add" >Add Todo</Link>    
    </nav>

  )
};

export default Nav;