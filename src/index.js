import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';


import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)


ReactDOM.render(<Application />, document.getElementById('root'));
