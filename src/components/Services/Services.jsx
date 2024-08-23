import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";
import { servicesData } from "../../assets/data/servicesData";

const Services = () => {
  return (
    <Container id="services">
      {/* Section Title */}
      <SectionTitle
        title={"services provided by us"}
        subTitle={"our services"}
      />

      {/* Cards Container */}
      <div className="grid grid-cols-1 gap-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {servicesData.map(({ id, name, details, Icon, iconColor, iconBg }) => (
          <div
            key={id}
            className="group cursor-pointer border border-transparent px-4 py-6 shadow transition-all ease-in-out hover:-translate-y-2 hover:border-gray-100 hover:shadow-lg"
          >
            <Icon
              className="size-10 rounded px-2 py-0.5"
              style={{ backgroundColor: iconBg, color: iconColor }}
            />
            <h4 className="mt-2 text-lg font-bold capitalize text-gray-800">
              {name}
            </h4>
            <p className="mt-1.5 max-w-sm text-gray-500">{details}</p>
            <HiOutlineArrowLongRight className="mt-3.5 size-9 text-lime-500 transition-all ease-in-out group-hover:scale-125 group-hover:text-orange-600" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
