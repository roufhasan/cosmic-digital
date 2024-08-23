import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
import Container from "../Shared/Container";
import ceoImg from "../../assets/images/profile/ceo.jpg";

const Achievements = () => {
  return (
    <Container id="achievements">
      <div className="flex flex-col gap-6 py-32 md:flex-row">
        <div className="md:w-1/2">
          <img
            className="size-96 rounded-full rounded-tr-none object-cover object-center transition-all duration-300 ease-in-out hover:scale-95"
            src={ceoImg}
            alt="ceo images"
            loading="lazy"
          />
          <div className="mt-5 w-fit">
            <q className="text-lg font-medium">
              Get big quietly so you don&apos;t tip off potential competitors.
            </q>
            <p className="text-right text-lg italic">CEO - Cosmic Digital</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="mt-2.5 text-sm font-semibold uppercase text-lime-500">
            Achievements
          </p>
          <h3 className="text-4xl font-semibold capitalize text-gray-800">
            We&apos;re a results driven team
          </h3>
          <div className="mt-6 space-y-7">
            <div className="group flex cursor-pointer gap-3">
              <HiOutlineDesktopComputer className="size-14 rounded bg-purple-100 px-2 py-0.5 text-purple-500" />
              <div>
                <h5 className="text-3xl font-semibold transition-all duration-200 ease-in-out group-hover:text-purple-500">
                  12500+
                </h5>
                <p className="text-lg font-medium text-gray-700">
                  Completed Project
                </p>
              </div>
            </div>
            <div className="group flex cursor-pointer gap-3">
              <BsPerson className="size-14 rounded bg-indigo-100 px-2 py-0.5 text-indigo-500" />
              <div>
                <h5 className="text-3xl font-semibold transition-all duration-200 ease-in-out group-hover:text-indigo-500">
                  750+
                </h5>
                <p className="text-lg font-medium text-gray-700">
                  Team Experts
                </p>
              </div>
            </div>
            <div className="group flex cursor-pointer gap-3">
              <IoEarth className="size-14 rounded bg-orange-100 px-2 py-0.5 text-orange-500" />
              <div>
                <h5 className="text-3xl font-semibold transition-all duration-200 ease-in-out group-hover:text-orange-500">
                  35+
                </h5>
                <p className="text-lg font-medium text-gray-700">
                  World Wide Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Achievements;
