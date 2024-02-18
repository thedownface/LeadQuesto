import React from "react";
import { Navbar, ResetPasswordForm } from "../components";

import '../index.css';

const ResetPassword = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-transparent bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
