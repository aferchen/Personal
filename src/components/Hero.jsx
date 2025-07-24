import ProfileImg from "../assets/me.jpg";
import FeaturedProjects from "./FeaturedProjects";
import TypewriterEffect from "./TypewriterEffect";

function Hero() {
  return (
    <section className="pt-32 px-6 md:px-16 pb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full text-left">
          <TypewriterEffect />
          <p className="text-xl text-gray-800 leading-relaxed font-sans">

            I am a junior at Iowa State University majoring in Computer Science who is passionate about web development,
             programing, and continuous learning. I primarily work in Java and Python to create web pages, Android applications,
            games, and other programs. My strengths are in front-end development and data structures. Scroll down to see highlights of my recent work!
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={ProfileImg}
            alt="Alec Ferchen"
            className="w-64 h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
      <FeaturedProjects />
    </section>
  );
}

export default Hero;
