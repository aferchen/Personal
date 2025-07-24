import { skills } from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
function About() {
  return (
    <section className="max-w-6xl mx-auto py-30 text-center">
      <h2 className="text-4xl font-bold mb-4 pb-8">About Me</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full flex justify-center">
          {/*other side */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="url(#gradient)"
            className="w-48"
          >
            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#B43AAC" />
              <stop offset="42%" stopColor="#FD1D1D" />
              <stop offset="92%" stopColor="#FCB045" />
            </linearGradient>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div className="md:w-1/2 w-full text-left">
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            I'm a junior at Iowa State University majoring in Computer Science
            with a minor in Data Science. I have a lot of experience with Java,
            Python, and HTML/CSS, and I've built a range of individual and
            team-based projects that show my passion for problem-solving and
            continuous learning. <br></br>
            I began coding in 2022 with basic Python and 
            JavaScript and have since grown through coursework, personal
            projects, and collaborative challenges like Advent of Code. I enjoy
            exploring new programming languages, algorithms, and data structures
            to deepen my technical understanding. <br></br>
            I thrive in collaborative
            environments where ideas are shared freely, and team members support
            each other's growth. I'm always eager to take on challenges, working
            independently to develop and refine solutions before seeking
            feedback or helping others in return.
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold mb-4 pt-16 pb-0">Experience</h2>
        {/* Programming Languages */}
        <ExperienceSection
          title="Programming Languages"
          items={skills.languages}
        />
        {/* Databases */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="md:w-1/4">
            <ExperienceSection title="Databases" items={skills.databases} />
          </div>
          {/* Framework + Libraries */}
          <div className="md:w-7/12">
            <ExperienceSection
              title="Frameworks & Libraries"
              items={skills.frameworks}
            />
          </div>
        </div>
        {/* Code Share */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="md:w-5/12">
            <ExperienceSection title="Code Sharing" items={skills.codeShare} />
          </div>
          {/* Mobile */}
          <div className="md:w-5/12">
            <ExperienceSection title="Mobile" items={skills.mobile} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
