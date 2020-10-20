import React from 'react';
import { CheeseMenu as Menu } from '../components'

const Cheese = ({ children }) => (<>
    <h1>Cheese!</h1>
    <Menu/>
    { children }
</>)

export default Cheese