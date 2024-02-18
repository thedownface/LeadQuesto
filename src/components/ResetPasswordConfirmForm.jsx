import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirmForm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to='/' />
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full'>
        <h1 className='text-2xl font-semibold mb-4'>Reset Password</h1>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <input
              className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
              type='password'
              placeholder='New Password'
              name='new_password'
              value={new_password}
              onChange={onChange}
              minLength='6'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
              type='password'
              placeholder='Confirm New Password'
              name='re_new_password'
              value={re_new_password}
              onChange={onChange}
              minLength='6'
              required
            />
          </div>
          <button
            className='w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80'
            type='submit'
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirmForm);
