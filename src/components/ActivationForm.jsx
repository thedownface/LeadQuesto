import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const ActivationForm = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verifyAccount = () => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to='/' />;
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full'>
        <h1 className='text-2xl font-semibold mb-4'>Verify your Account</h1>
        <p className='text-gray-600'>Click the button below to verify your account</p>
        <button
          onClick={verifyAccount}
          className='w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-opacity-80'
          type='button'
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(ActivationForm);