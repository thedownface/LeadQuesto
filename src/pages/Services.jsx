import React from "react";
import { Navbar2, Services, Experience, Footer} from "../components";

const ServicesPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar2 />
      </div>
      <Experience />
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default ServicesPage;
