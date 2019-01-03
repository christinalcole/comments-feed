import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentFeed from './containers/CommentFeed';
import * as serviceWorker from './serviceWorker';

const comments = [
  {
    author: "Wilson",
    text: "When I get off this island, I'm going to Disney",
  },
  {
    author: "Sting",
    text: "Woke up this morning, can't believe what I saw",
  },
  {
    author: "Peter Garrett",
    text: "I hear the bullroarer"
  },
]

ReactDOM.render(
  <CommentFeed comments = { comments } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
