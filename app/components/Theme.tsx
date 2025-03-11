"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Theme = () => {
  const containerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Glow effect animation for cards
  const glowAnimation = {
    animate: {
      boxShadow: [
        "0px 0px 0px rgba(90, 60, 190, 0)",
        "0px 0px 20px rgba(90, 60, 190, 0.5)",
        "0px 0px 0px rgba(90, 60, 190, 0)"
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Floating animation for the stars
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <section id="themes" className="py-20 bg-hackathon-dark-blue relative overflow-hidden mr-5">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-hackathon-light-pink opacity-20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, Math.random() * 40 - 20],
            opacity: [0.2, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}

      <motion.div 
        className="container mx-auto px-4"
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-hackathon-light-pink uppercase relative"
          variants={titleVariants}
        >
          {/* Decorative stars */}
          <motion.span 
            className="absolute -left-6 -top-6 text-xl text-hackathon-lavender"
            variants={floatingAnimation}
            animate="animate"
          >
            ✦
          </motion.span>
          Hackathon Themes
          <motion.span 
            className="absolute -right-6 -top-4 text-2xl text-hackathon-lavender"
            variants={floatingAnimation}
            animate="animate"
          >
            ✧
          </motion.span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Intergalactic Innovation",
              description: "Pioneering breakthrough projects that push the boundaries of the digital universe."
            },
            {
              title: "Cosmic Collaboration",
              description: "Uniting diverse talents from across the galaxy to create collaborative masterpieces."
            },
            {
              title: "Future of AI",
              description: "Innovating with advanced AI to solve tomorrow's challenges in real time."
            }
          ].map((theme, index) => (
            <motion.div
              key={index}
              className="bg-hackathon-darker-blue p-6 rounded-lg flex flex-col items-center relative"
              variants={cardVariants}
              whileHover="hover"
              animate="animate"
              custom={index}
            >
              {/* Glow effect behind the card */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                variants={glowAnimation}
                animate="animate"
              />
              
              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              >
                {index === 0 && (
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-hackathon-light-pink">
                    <motion.path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-hackathon-light-pink">
                    <motion.path
                      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"
                      fill="currentColor"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-hackathon-light-pink">
                    <motion.path
                      d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
                      fill="currentColor"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                    />
                  </svg>
                )}
              </motion.div>

              <motion.h3 
                className="text-2xl font-semibold mb-4 text-hackathon-lavender"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {theme.title}
              </motion.h3>
              
              <motion.p 
                className="text-hackathon-beige text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {theme.description}
              </motion.p>
              
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-transparent via-hackathon-lavender to-transparent mt-4 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.7 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Theme;