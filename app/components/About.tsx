"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-4xl mb-12 text-center font-press-start text-hackathon-lavender"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Colossus 2025
        </motion.h2>

        {/* About College Section - Fixed alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* College Image */}
          <div className="h-full">
            <Image
              src="/images/clg_pic.jpg"
              alt="Dr. Ambedkar Institute of Technology"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* College Description */}
          <div className="bg-[#2d2b55] p-6 rounded-lg h-full flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-[#c3bef7]">
              About Us
            </h3>
            <p className="text-base sm:text-lg text-hackathon-beige font-jetbrains">
              Dr. Ambedkar Institute of Technology (Dr. AIT) was founded by M.H.
              Jayaprakash Narayan in 1980. Named after Dr. B.R. Ambedkar, the
              institute is affiliated to Visvesvaraya Technological University
              (VTU), Belagavi and is recognized and accredited by AICTE and NBA
              respectively. The institution is accredited by NAAC with 'A+'
              Grade. The Institution has achieved 163 Rank in National
              Institutional Ranking Framework (NIRF). In the year 2010, academic
              autonomy was conferred by the University Grants Commission, New
              Delhi, which has enabled the institution to frame its own
              curriculum, examinations and awarding of the degrees.
            </p>
          </div>
        </div>

        {/* Hackathon Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* What is Colossus */}
          <div className="bg-[#2d2b55] p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-[#c3bef7]">
              What is Colossus 2025?
            </h3>
            <p className="text-base sm:text-lg text-hackathon-beige font-jetbrains">
              Colossus 2025 is a 24-hour hackathon where people from different
              backgrounds come together to build innovative tech projects. It's
              a chance for developers, designers, and creative thinkers to
              learn, collaborate, and create something new. Organized by the
              technical club at Dr. Ambedkar Institute of Technology, Bengaluru,
              in collaboration with Nanogram Hub and the Google Developers
              Student Club.
            </p>
          </div>

          {/* Why Participate */}
          <div className="bg-[#2d2b55] p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-[#c3bef7]">
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
        </div>

        {/* Previous Hackathon Stats */}
        <div className="mb-8">
          <motion.h3
            className="text-4xl sm:text-3xl text-center font-press-start text-hackathon-lavender"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HackColossus 2024 Highlights
          </motion.h3>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Participants */}
          <div className="text-center bg-[#2d2b55] p-6 rounded-lg">
            <h3 className="text-3xl sm:text-4xl font-press-start text-[#06d6a0]">
              160+
            </h3>
            <p className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains">
              ON-CAMPUS PARTICIPANTS
            </p>
          </div>

          {/* Teams */}
          <div className="text-center bg-[#2d2b55] p-6 rounded-lg">
            <h3 className="text-3xl sm:text-4xl font-press-start text-[#06d6a0]">
              40+
            </h3>
            <p className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains">
              TEAMS
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center bg-[#2d2b55] p-6 rounded-lg">
            <h3 className="text-3xl sm:text-4xl font-press-start text-[#06d6a0]">
              16k+
            </h3>
            <p className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains">
              REACH ON SOCIAL MEDIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
