import React from "react";
import { SignupForm } from "../components";
import '../index.css';

const Signup = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-transparent bg-cover bg-no-repeat bg-center'>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
