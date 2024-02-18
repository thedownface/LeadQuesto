import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const AboutUsContent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-20`}>
          About Our Company
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Who We Are:
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div
          style={{
            background: "#1d1836",
            color: "#fff",
            borderRight: "7px solid  #232631",
            padding: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            Lead Questo started in 2021 and has been on a journey of continuous growth and employee satisfaction. We have earned positive reviews from our clients and partners.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            We leverage automated pipelines that undergo extensive data enrichment and filtering processes. Our advanced AI technologies enrich data and automate complex procedures.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            Our journey involves continuous evolution and the development of numerous automated software solutions. These innovations will soon become part of our Quick Access product lineup.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            At Lead Questo, we prioritize the security and privacy of our clients' data. We trust our customers' data, and any information we discuss or handle is treated with the utmost confidentiality. Our data delivery system uses end-to-end encryption, ensuring that no middleman can access sensitive information during transit. This level of security guarantees that your data is safe with us.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            We respect our clients' privacy and adhere to the highest standards of data protection. Your trust is our most valuable asset, and we are committed to maintaining the confidentiality and security of your information. Our strict privacy policies ensure that your data is used only for its intended purpose and is never shared without your consent.
          </p>
        </div>
      </div>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center mt-20`}>
          Ensuring Your Data's Security and Privacy
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Privacy Policy:
        </h2>
        
      </motion.div>
      
      <div className='mt-20 flex flex-col'>
        <div
          style={{
            background: "#1d1836",
            color: "#fff",
            borderRight: "7px solid  #232631",
            padding: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            At Lead Questo, we understand the importance of data security and privacy. We are committed to ensuring the confidentiality of your data and maintaining the highest standards of protection.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            Your trust is paramount to us, and we take all necessary measures to safeguard your data. Our data delivery system employs robust end-to-end encryption, guaranteeing that your information remains secure from any unauthorized access or interception during transmission.
          </p><br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            Our privacy policy dictates that your data is used solely for its intended purpose, and we will never share it with third parties without your explicit consent. We value your privacy and are committed to protecting it at all costs.
          </p>
          <br></br>
          <p className='text-white-100 text-[16px] pl-1 tracking-wider'>
            In addition to our commitment to privacy and security, we have a robust Delivery Policy. We pledge to deliver data as discussed in our meetings or deals. If, for any unforeseen reason, we fail to deliver as agreed, we offer a refund of 10% of the total cost for each day of late delivery. Our dedication to meeting deadlines and providing quality service is our promise to you.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutUsContent, "about");
