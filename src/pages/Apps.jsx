import React from "react";
import { Navbar2, Services, Experience, Footer} from "../components";

const Apps = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar2 />
      </div>
      <section id='services'>
      <Services />
      </section>
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default Apps;
