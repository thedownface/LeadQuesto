import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import axios from 'axios';

const ResetPasswordForm = ({ reset_password, isAuthenticated }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await reset_password(email);
      setRequestSent(true);
    } catch (err) {
      // Handle any errors here
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full'>
        <h1 className='text-2xl font-semibold mb-4'>Request Password Reset</h1>
        <p className='text-gray-600'>Enter your email to reset your password</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-4'>
            <input
              className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80' type='submit'>
            Reset Password
          </button>
        </form>
        {requestSent && (
          <p className='mt-3 text-green-600'>Password reset request sent. Check your email for instructions.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { reset_password })(ResetPasswordForm);
