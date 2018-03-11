import React, {Component} from 'react';
import { auth, googleAuthProvider } from './firebase';

import './SignIn.css';

const SignIn = ( ) => {
  return (
    <div className="SignIn">
      <button
        className="block"
        onClick={() => auth.signInWithPopup(googleAuthProvider)}
      >
        Sign In
      </button>
    </div>
  );
}
export default SignIn;
