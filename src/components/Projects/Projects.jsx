import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";
import { projectsData } from "../../assets/data/projectsData";

const Projects = () => {
  return (
    <Container id="projects">
      {/* Section Title */}
      <SectionTitle
        subTitle="projects"
        title="we build digital brands and experiences"
      />

      {/* Projects Container */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectsData.map(({ id, projectImg, title, subTitle }) => (
          <div key={id} className="group cursor-pointer">
            <img
              src={projectImg}
              alt={title}
              loading="lazy"
              className="rounded-lg transition-all duration-300 ease-in-out group-hover:scale-95"
            />

            <div>
              <h4 className="relative mt-3 text-xl font-semibold transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[0%] after:bg-lime-400 after:transition-all after:duration-300 after:content-[''] group-hover:text-lime-500 group-hover:after:w-3/4">
                {title}
              </h4>
              <p className="mt-3 tracking-wide text-gray-700">{subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
