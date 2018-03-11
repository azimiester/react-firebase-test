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
      <p className="Message--user">{ user.displayName }: <span className="Message--content">{ message }</span></p>

  </article>
);

export default Message;
