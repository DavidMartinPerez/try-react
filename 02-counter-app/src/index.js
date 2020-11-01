import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const saludo = <h1>Saludos! Capitan</h1>

const divRoot = document.querySelector('#root');

ReactDOM.render( <App />, divRoot )