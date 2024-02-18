import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const [userExists, setUserExists] = useState(true);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (err) {
      if (err.response.status === 404) {
        setUserExists(false);
      }
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(`<span class="math-inline">\{process\.env\.REACT\_APP\_API\_URL\}/auth/o/google\-oauth2/?redirect\_uri\=</span>{process.env.REACT_APP_API_URL}/google`)

      window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(`<span class="math-inline">\{process\.env\.REACT\_APP\_API\_URL\}/auth/o/facebook/?redirect\_uri\=</span>{process.env.REACT_APP_API_URL}/facebook`)

      window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full'>
        <h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
        <p className='text-gray-600'>Sign into your Account</p>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <input
              className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              minLength='6'
              required
            />
          </div>
          <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80' type='submit'>Login</button>
        </form>
        <button className='w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-opacity-80' onClick={continueWithGoogle}>
          Continue With Google
        </button>
        <br />
        <button className='w-full mt-3 bg-primary text-white py-2 rounded-lg hover:bg-opacity-80' onClick={continueWithFacebook}>
          Continue With Facebook
        </button>
        <p className='mt-3 text-gray-600'>
          Don't have an account? <Link to='/signup' className='text-primary'>Sign Up</Link>
        </p>
        <p className='mt-3 text-gray-600'>
          Forgot your Password? <Link to='/reset-password' className='text-primary'>Reset Password</Link>
        </p>
        {userExists === false && (
          <Alert variant="danger">
            Account doesn't exist. Please sign up.
          </Alert>
        )}
      </div>
    </div>
  );
};



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);
