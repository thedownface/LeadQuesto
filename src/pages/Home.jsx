import React from "react";
import { Navbar2, Hero, Services, Experience, Feedbacks, Pricing, Footer} from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar2 />
        <Hero />
      </div>
      <section id='services'>
      <Services />
      </section>
      <Experience />
      <Feedbacks />
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default Home;
