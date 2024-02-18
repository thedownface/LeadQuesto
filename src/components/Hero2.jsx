import React from 'react';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import '../index.css';

const Hero2 = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Add a negative margin-top to push Hero2 below Hero1 */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingY} flex flex-row items-start gap-5`}
      >
        <div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We Believe Connecting helps Expanding Business<br className='sm:block hidden' />
            We guarantee 97% deliverability of emails.
          </p>
        </div>
      </div>

      {/* Adjust the positioning of the link */}
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'></a>
      </div>
      
      {/* Adjust the positioning of the circles */}
      <div className='absolute bottom-0 left-0 w-full flex justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#fc79b7]' />
        <div className='w-1 sm:h-80 h-40 pink-gradient' />
      </div>
    </section>
  );
};

export default Hero2;
