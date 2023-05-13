import Bar from "../components/Bar";
import HeadText from "../components/HeadText";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <HeadText headTitle="Resume" />
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">BS Computer Science</h5>
            <p className="font-semibold">
              GC University, Faisalabad (2014-2018)
            </p>
            <p className="my-3">
              I completed my gratualtion in Computer Science from Govt College
              University, Faisalabad, Pakistan
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Developer</h5>
            <p className="font-semibold">Xorexs Limited (Nov-2020 - Present)</p>
            <p className="my-3">
              I am working as a full stack developer in UK based IT company
              Xorexs Limited, Lahore
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
