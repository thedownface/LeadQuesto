import React from "react";
import { Navbar, Footer, LoginForm } from "../components";

import '../index.css';

const ResetPasswordConfirm = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-transparent bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <ResetPasswordConfirmForm />
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
