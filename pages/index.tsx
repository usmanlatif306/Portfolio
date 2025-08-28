import { NextPage } from "next";
import HeadText from "../components/HeadText";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <HeadText
        title="Usman Latif - Full Stack Developer"
        description="Usman Latif is a skilled full stack developer creating innovative web applications. Explore my portfolio showcasing modern web development projects and technical expertise."
      />
      <h6 className="my-3 text-base font-medium">
        I&apos;m a passionate full stack developer with over 5 years of
        experience, currently working at Xorexs Limited. I specialize in
        building modern web applications using Laravel, React, Vue.js, Next.js,
        and Inertia.js, with Tailwind CSS for responsive design. My expertise
        spans both frontend and backend development, creating scalable
        applications that deliver exceptional user experiences. I&apos;m also
        expanding into Chrome extension development, crafting solutions that
        enhance user productivity. I thrive on transforming complex ideas into
        clean, efficient code while staying current with emerging technologies.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
