import { CiMail } from "react-icons/ci";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-30 text-center">
      <div className="flex items-center justify-center gap-2 text-4xl font-bold mb-4 pb-8">
        <CiMail className="text-blue-600" />
        <h2>Contact Me</h2>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 w-full md:w-1/2 mx-auto flex items-center justify-center">
        <form
          action="https://formsubmit.co/aferchen@iastate.edu"
          method="POST"
          className="flex flex-col gap-4 w-128 items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-2 border rounded w-128"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="p-2 border rounded w-128"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 border rounded h-32 w-128"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded w-64 flex items-center justify-center gap-1 text-xl hover:bg-blue-800"
          >
            <PiPaperPlaneTiltLight />
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center text-3xl font-bold mb-4 pt-8">
        <h2>Or</h2>
      </div>
      <div className="flex justify-center hidden md:flex space-x-10 text-3xl pb-32">
          <a
            href="https://www.linkedin.com/in/alec-ferchen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-900"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/aferchen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-900"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:aferchen@iastate.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-900"
          >
            <CiMail />
            <span>Email</span>
          </a>
        </div>
    </section>
  );
}

export default Contact;
