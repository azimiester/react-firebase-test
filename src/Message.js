import React from 'react';
import './Message.css';

const Message = ({ key, message, user, time }) => (
  <article className="Message">
    <div className="Message--avatar">
      <img
        className="Message--display"
        alt="presentation"
        src={user.photoURL}
      />
    </div>
    <div className="Message--main">
      <h4 className="Message--user">{ user.displayName }</h4>
      <p className="Message--content">{ message }</p>
    </div>
  </article>
);

export default Message;
