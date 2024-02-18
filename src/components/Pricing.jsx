import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { plans } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PricingCard= ({ plan,index})=> {
  return(
    <Tilt className='xs:w-[270px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-gradient p-[1px] rounded-[20px] '
    >
    <div className='w-full blue-gradient p-[1px] rounded-[20px] '>
        
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[440px] flex justify-evenly items-center flex-col'>
              
              <p className="text-base text-neon-lightning text-weight-500 text-5xl font-bold ">{plan.header}</p>
              <div className="mx-auto max-w-xs px-8"></div>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white-900"> ${plan. monthlyPrice}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>

                </p>
                <div>
                {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {plan.features.map((feature, index) => (
          <p
            key={`pricing-details-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {feature}
          </p>
        ))}
      </ul> */}
                </div>
                <a
                  href="#"
                  className={`${styles.buttonSecondary}`}
                >
                  SEE DETAILS
                </a>
                <p class="mt-6 text-xs leading-5 blue-neon-lightning ">Invoices and receipts available for easy company reimbursement</p>
              </div>
</div>
</motion.div>
  </Tilt>
  );
        };


const Pricing =() => {
return (
  <>
  <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Plans</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Pick from our tailored made custom plans as per your needs.
      </motion.p>
 
    <div className='mt-20 ml-18 flex flex-wrap gap-8'>
          {plans.map((plan, index) => (
            <PricingCard
              key={`plan-${index}`}
              plan={plan}
            />
          ))}
      </div>
      </>
    
  );
};

export default SectionWrapper(Pricing, "pricing");