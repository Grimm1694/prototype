import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-hackathon-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Footer header */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">Colossus 2025</h3>
            <p className="text-sm">
              Join us for an exciting coding adventure!
            </p>
          </div>

          {/* Email Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h4 className="text-[30px] font-semibold mb-2">Email</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:colossus@drait.edu.in"
                  className="text-pink-200 hover:underline text-2xl"
                >
                  colossus@drait.edu.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:hackcolossus@gmail.com"
                  className="text-pink-200 hover:underline text-2xl"
                >
                  hackcolossus@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-[30px] font-semibold mb-2">Connect With Us</h4>
            <div className="flex justify-center space-x-4 text-2xl">
              <a
                title="Instagram"
                href="https://www.instagram.com/hackcolossus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                title="Discord"
                href="https://discord.com/invite/f67PkkFqHv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaDiscord />
              </a>
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/company/hackcolossus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                title="Twitter"
                href="https://x.com/hackcolossus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                title="YouTube"
                href="https://www.youtube.com/channel/UCP4VgBr2hBXLdGRY_kT6X-Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                title="Email"
                href="mailto:hackcolossus@gmail.com"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          © 2023 Hackathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
