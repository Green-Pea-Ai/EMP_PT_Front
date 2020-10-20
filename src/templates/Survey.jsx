import React from 'react';
import { SurveyMenu as Menu } from '../components'

const Survey = ({ children }) => (<>
    <h1>Survey!</h1>
    <Menu/>
    { children }
</>)

export default Survey;