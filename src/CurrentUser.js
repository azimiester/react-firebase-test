import React from 'react';
import './CurrentUser.css';

const CurrentUser = (props) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={ props.currentUser.photoURL }
        alt={ props.currentUser.displayName }
      />
      <div className="CurrentUser--identification">
        <h3 className="CurrentUser--displayName">{ props.currentUser.displayName }</h3>
        <p className="CurrentUser--email">{ props.currentUser.email }</p>
      </div>
    </div>
  );
};
export default CurrentUser;
