
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <div
      style={{
        background: "#1d1836",
        color: "#fff",
        borderRight: "7px solid  #232631",
        padding: "20px",
        marginBottom: "20px",
        marginLeft:"20px",
      }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <p
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </p>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div className='mt-20'>
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} text-center`}>
          Why choose Us?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          What we Offer:
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
