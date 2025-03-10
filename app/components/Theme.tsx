"use client";
import { motion } from "framer-motion";

const Theme = () => {
  return (
    <section id="themes" className="py-20 bg-hackathon-dark-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hackathon Themes
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-hackathon-darker-blue p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-hackathon-lavender">
              Intergalactic Innovation
            </h3>
            <p className="text-hackathon-beige text-center">
              Pioneering breakthrough projects that push the boundaries of the
              digital universe.
            </p>
          </div>
          <div className="bg-hackathon-darker-blue p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-hackathon-lavender">
              Cosmic Collaboration
            </h3>
            <p className="text-hackathon-beige text-center">
              Uniting diverse talents from across the galaxy to create
              collaborative masterpieces.
            </p>
          </div>
          <div className="bg-hackathon-darker-blue p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-hackathon-lavender">
              Future of AI
            </h3>
            <p className="text-hackathon-beige text-center">
              Innovating with advanced AI to solve tomorrow's challenges in real
              time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Theme;
