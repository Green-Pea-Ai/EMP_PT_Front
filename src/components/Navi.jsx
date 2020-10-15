import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => <>
    <nav>
        <ol>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cheese'>Cheese</Link></li>
        <li><Link to='/board'>Board</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/survey'>Survey</Link></li>
        </ol>
    </nav>
</>

export default Navi;