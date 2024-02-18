import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { tradeShows } from "../constants"; // Import trade shows data
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useHistory } from "react-router-dom";
import { styles } from "../style";

const TradeShowCard = ({ index, name, link, image, time, location, attendeesCount, exhibitorsCount, imagePath }) => (
  <Tilt className='w-full'>
    <a href={link} >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl"
      >
        <img src={image} alt={name} className="h-64 w-full object-cover object-center" />
        <div className="px-6 py-4">
          
          <p className="text-gray-700 text-base">
          <div className="font-bold text-xl mb-2 object-center">{name}</div>
            <strong>Date:</strong> {time}<br />
            <strong>Country:</strong> {location}<br />
            <strong>Attendees:</strong> {attendeesCount}<br />
            <strong>Exhibitors:</strong> {exhibitorsCount}
          </p>
        </div>
      </motion.div>
    </a>
  </Tilt>
);

const TradeShows = () => {
  const history = useHistory();
  
  return (
    <div className="mt-30">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Tradeshows Data</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mt-20'
      >
        Discover the Tradeshows Data we provide.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tradeShows.map((show, index) => (
          <TradeShowCard key={index} index={index} {...show} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">And many more...</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contact Us Now
        </motion.button>
      </div>
    </div>
  );
};

export default SectionWrapper(TradeShows, "tradeshows");