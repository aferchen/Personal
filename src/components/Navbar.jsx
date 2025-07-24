import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50 py-3 bg-transparent">
      <div className="grid grid-cols-3 items-center max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Nameplate */}
        <div className="justify-self-start bg-white shadow-md px-6 py-3 rounded-full">
          <Link
            to="/"
            className="text-4xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(180, 58, 172, 1) 0%, rgba(253, 29, 29, 1) 40%, rgba(252, 176, 69, 1) 100%)",
            }}
          >
            Alec Ferchen
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="justify-self-center bg-white shadow-md px-6 py-3 rounded-full">
          <div className="flex space-x-6 text-gray-700 font-medium">
            <Link className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition" to="/">Home</Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition" to="/about">About</Link>
            <Link className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition" to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="justify-self-end hidden md:flex space-x-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/alec-ferchen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aferchen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;