import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[350px] h-[250px]"
      >
        {/* Add your contact information here */}
        <div className="p-8 bg-black-100 rounded-2xl">
          <p className={styles.sectionSubText}>Contact Information</p>
          <p className={styles.sectionHeadText}>Get in touch</p>
          <p>Address: Your Address</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: Your Email Address</p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4"
          style={{ width: "100%" }} // Increase the form width to 100%
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${styles.inputFullWidth}`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${styles.inputFullWidth}`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${styles.inputFullWidth}`}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactForm, "contact");
