import React from "react";
import { Navbar, Footer, ActivationForm } from "../components";

import '../index.css';

const Activate = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-transparent bg-cover bg-no-repeat bg-center'>
        <Navbar />
         <ActivationForm/>
      </div>
    </div>
  );
};

export default Activate;
