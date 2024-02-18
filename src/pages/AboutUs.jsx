import React from "react";
import { Navbar2, Footer,AboutUsContent } from "../components";

const AboutUs = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar2 />
      </div>
        <AboutUsContent/>
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default AboutUs;
