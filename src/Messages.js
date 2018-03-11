import React from 'react';
import map from 'lodash/map';
import Message from './Message';
import './Messages.css';

const Messages = ({messages}) => (
  <section className="Messages">
    <h1> Live Coding Chat Application (React + Firebase) </h1>
    {
      map(messages, (message, key) => (
        <Message 
          key={key}
          {...message}
        />
      ))
    }
  </section>
);

export default Messages;
