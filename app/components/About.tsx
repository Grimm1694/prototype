"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-20 bg-hackathon-darker-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl mb-8 text-center font-press-start text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Colossus 2025
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-hackathon-dark-blue p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-hackathon-lavender">
              What is Colossus 2025?
            </h3>
            <p className="mb-4 text-base sm:text-lg text-hackathon-beige font-jetbrains">
              Colossus 2025 is a 24-hour hackathon where people from different
              backgrounds come together to build innovative tech projects. It’s
              a chance for developers, designers, and creative thinkers to
              learn, collaborate, and create something new.
            </p>
          </div>
          <div className="bg-hackathon-dark-blue p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-hackathon-lavender">
              Why Participate?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-hackathon-beige font-jetbrains">
              <li>Connect with like-minded individuals</li>
              <li>Learn new skills and technologies</li>
              <li>Win exciting prizes and recognition</li>
              <li>Build real-world projects for your portfolio</li>
              <li>Enjoy a fun and collaborative experience</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
