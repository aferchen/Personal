import ProjectCard from './ProjectCard';
import AssemblyImg from "../assets/assembly.svg";
import Cynance from "../assets/Cynance_Crop.png";
import Pasta from "../assets/Pasta3.png";
import Advent from "../assets/Advent.png";
import Message from "../assets/messageReconstruct.png";
import CynanceH from "../assets/CynanceHover.png";
import AssemblyH from "../assets/AssemblyHover.png";
import PastaH from "../assets/PastaHover.jpeg";
import AdventH from "../assets/AdventHover.png";
import MessageH from "../assets/MessageReconstructHover.png";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Cynance",
      description:
        "An Android app I developed along with a team using Android Studio in front-end, mainly. This app lets users track finances, chat in real time with advisors, chart goals, and stock prices all in one place",
      imageSrc: Cynance,
      hoverImg: CynanceH,
      banners: ["Android Studio", "MySQL", "Postman", "SCRUM"],
      Link: "https://youtube.com/shorts/1oYWxJufBqE?feature=share",
      LinkDesc: "Watch Demo",
      date: "Aug 2024 - Dec 2024",
      Link2: "https://github.com/aferchen/Cynance",
      LinkDesc2: "View on GitHub",
    },
    {
      title: "Assembly Disassembler",
      description:
        "Given binary LEGv8 instructions encoded in big-endian byte order, this program then converts this input into the original assembly code that would output the binary given.",
      imageSrc: AssemblyImg,
      hoverImg: AssemblyH,
      banners: ["Assembly"],
      Link: "https://github.com/aferchen/Assembly-Disassembler",
      LinkDesc: "View on GitHub",
      date: "Mar 2025",
    },
    {
      title: "Pasta la Vista",
      description:
      "I created a webpage for a fake Italian restaurant which include front-to-back end connections with user accounts, password protection, cart details and more!",
      imageSrc: Pasta,
      hoverImg: PastaH,
      banners: ["React", "Mongo DB", "MySQL", "Tailwind"],
      Link: "https://github.com/aferchen/Pasta-la-Vista",
      LinkDesc: "View on Github",
      Link2: "https://youtu.be/zxMaadEYxRY",
      LinkDesc2: "Watch Demo",
      date: "Mar 2025",
    },
    {
      title: "Advent of Code",
      description:
        "A team and solo project I took on every day in December to help with team problem solving, programming practice, using different languages, and much more.",
      imageSrc: Advent,
      hoverImg: AdventH,
      banners: ["Java", "Python", "JavaScript"],
      Link: "https://adventofcode.com",
      LinkDesc: "View Site",
      date: "2023 - Present",
    },
    {
      title: "Message Reconstructor",
      description:
        "Given different encoded messages and an instruction set on decoding using binary search trees, finding the hidden messages and images in encoded strings",
      imageSrc: Message,
      hoverImg: MessageH,
      banners: ["Java"],
      Link: "https://github.com/aferchen/Message-Tree-Sorters",
      LinkDesc: "View on GitHub",
      date: "2023 - 2024",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">Featured Projects</h2>
      {projects.map((p, idx) => (
        <ProjectCard key={idx} {...p} reverse={idx % 2 === 1} />
      ))}
    </section>
  );
}
