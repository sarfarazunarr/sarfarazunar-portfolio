import { FaLocationPin } from "react-icons/fa6";

import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  
  return (
    <div className="w-full p-4 md:p-10">
      <h1 className="text-gray-200 text-5xl hover:text-green-500 transition-colors duration-200 ease-linear pb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> <span className=" block md:inline text-[1.5rem] md:text-5xl ">Hello Everyone!</span> I&apos;m Sarfaraz Unar</h1>

      <h3 className="text-[20px] text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">I build intelligent, full-stack web solutions that are fast, scalable, and powered by modern AI. </h3>

      <div className="flex w-full my-5 items-center justify-start gap-3">
        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
          <FaLocationPin className="w-5 text-green-400" />
          <p className="text-gray-400">Hala Sindh, Pakistan</p>
        </div>
        <hr className="border divide-dotted w-[45%] border-gray-500" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" />

      </div>

      {/* Projects Section */}
      <Projects title="Latest Projects" limit={3} btnText={"View All"} btnLink={"/projects"} />

      {/* Testimonial Sectin */}
      <Testimonials title="Kind words of clients" limit={3} btnText="Connect" btnLink="/contact" />

    </div>
  );
}
