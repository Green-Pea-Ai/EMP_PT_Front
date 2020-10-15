import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => <>

    <Link to='/'>[Home]</Link>
    <Link to='/cheese'>[Cheese]</Link>
    <Link to='/board'>[Board]</Link>
    <Link to='/user'>[User]</Link>
    <Link to='/survey'>[Survey]</Link>

</>

export default Navi;