import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import '../index.css'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fc79b7]' />
          <div className='w-1 sm:h-80 h-40 pink-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className={`w-1 sm:h-80 h-40 text-neon-lightning`}>Lead Questo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Find your next potential lead<br className='sm:block hidden' />
            Contact Us now
          </p>
          <a id='contact' className={`${styles.buttonPrimary}`} title="FREE TRIAL">CONTACT US</a>
        <button className={`${styles.buttonSecondary}`} title="See our plans">Tradeshows Data</button>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          
        </a>
      </div>
    </section>
  );
};

export default Hero;
