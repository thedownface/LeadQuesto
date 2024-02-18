import React, { useEffect } from "react";
import { Navbar, Footer, LoginForm } from "../components";
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';
import '../index.css';

const Login = ({ checkAuthenticated, load_user }) => {
  useEffect(() => {
    // Call the action functions as functions
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-transparent bg-cover bg-no-repeat bg-center'>
        <LoginForm />
      </div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Login);
