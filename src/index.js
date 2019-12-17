import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingList from './components/shoppingList'
import './index.scss';

ReactDom.render(<ShoppingList />, document.querySelector(`#root`));
