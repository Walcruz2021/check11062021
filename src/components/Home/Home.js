import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';
import Todos from '../Todos/Todos';

export function Home() {
  return (
    <div>
       <Todos status='Todo'/>
       <Todos status='InProgress'/>
       <Todos status='Done'/>
    </div>
  )
};

export default Home;