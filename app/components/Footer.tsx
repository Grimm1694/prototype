import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-hackathon-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-bold text-hackathon-light-pink">
              Colossus 2025
            </h3>
            <p className="mt-4 text-lg text-hackathon-beige">
              Join us for an exciting coding adventure!
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About",
                "Schedule",
                "Speakers",
                "Sponsors",
                "Previous Hackathon",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-hackathon-beige hover:text-hackathon-purple transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://unstop.com/hackathons/colossus-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hackathon-beige hover:text-hackathon-purple transition-colors duration-300"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-2">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/hackcolossus/"
                aria-label="Instagram"
                className="hover:text-hackathon-purple transition-colors duration-300"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/hack-colossus/posts/?feedView=all"
                aria-label="LinkedIn"
                className="hover:text-hackathon-purple transition-colors duration-300"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11 19H4v-9h4v9zm-2-10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 10h-4v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-4v-9h4v1.2c.6-.9 1.7-1.8 3.1-1.8 2.2 0 4 1.8 4 4v4.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-12 border-t border-hackathon-purple pt-6 text-center text-sm text-hackathon-beige">
          © {new Date().getFullYear()} Colossus 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
