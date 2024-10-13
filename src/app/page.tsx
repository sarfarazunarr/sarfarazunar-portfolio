import Image from "next/image";
import Link from "next/link";
import { FaDev, FaEye, FaFacebook, FaGithub, FaLinkedin, FaLocationPin, FaYoutube } from "react-icons/fa6";
import ProjectCard from "./components/Card";
import { BsArrowRight } from "react-icons/bs";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const socialLinks = [
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/sarfarazunar",
      icon: <FaLinkedin size={20} />,
      color: "from-sky-600 border-sky-800"
    },
    {
      name: "Github",
      link: "https://github.com/sarfarazunarr",
      icon: <FaGithub size={20} />,
      color: "from-purple-600 border-purple-800"
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@sarfarazunarr",
      icon: <FaYoutube size={20} />,
      color: "from-red-600 border-red-800"
    },
    {
      name: "Facebook",
      link: "https://facebook.com/sarfarazunarr",
      icon: <FaFacebook size={20} />,
      color: "from-blue-600 border-blue-800"
    }
  ]
  return (
    <div className="w-full p-10">
      <h1 className="text-gray-200 text-5xl hover:text-green-500 transition-colors duration-200 ease-linear pb-8">Hello Everyone! I'm Sarfaraz Unar</h1>

      <h3 className="text-[20px] text-gray-400">I develop Secure, Scalable, High Performance Backends! </h3>

      <div className="flex w-full my-5 items-center justify-start gap-3">
        <div className="flex items-center gap-3">
          <FaLocationPin className="w-5 text-green-400" />
          <p className="text-gray-400">Hala Sindh, Pakistan</p>
        </div>
        <hr className="border divide-dotted w-[45%] border-gray-500" />

      </div>

      {/* Projects Section */}
      <Projects title="Latest Projects" limit={3} btnText={"View All"} btnLink={"/projects"} />

      {/* Testimonial Sectin */}
      <Testimonials title="Kind words of clients" limit={3} btnText="Connect" btnLink="/contact" />

    </div>
  );
}
