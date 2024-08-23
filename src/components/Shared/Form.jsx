import { BsEnvelope } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { RiEarthLine } from "react-icons/ri";
import { IoFileTrayFullOutline } from "react-icons/io5";

const Form = () => {
  return (
    <div className="mx-auto flex w-full justify-between gap-4 rounded-lg bg-gray-100 p-4 lg:w-4/5 xl:p-20">
      {/* Form left info div */}
      <div className="hidden w-3/4 flex-col justify-evenly md:flex">
        {/* info */}
        <div className="group flex cursor-pointer gap-2">
          <IoFileTrayFullOutline className="size-14 rounded-lg bg-white px-3 py-1 transition-all duration-300 ease-in-out group-hover:text-lime-500" />
          <div>
            <h5 className="text-lg font-semibold transition-all duration-300 ease-in-out group-hover:text-lime-500">
              Need Support?
            </h5>
            <p>Get instant answers.</p>
          </div>
        </div>
        {/* info */}
        <div className="group flex cursor-pointer gap-2">
          <BsEnvelope className="size-14 rounded-lg bg-white px-3 py-1 transition-all duration-300 ease-in-out group-hover:text-lime-500" />
          <div>
            <h5 className="text-lg font-semibold transition-all duration-300 ease-in-out group-hover:text-lime-500">
              Feedback?
            </h5>
            <p>Tell us about it here.</p>
          </div>
        </div>
        {/* info */}
        <div className="group flex cursor-pointer gap-2">
          <LuMessagesSquare className="size-14 rounded-lg bg-white px-3 py-1 transition-all duration-300 ease-in-out group-hover:text-lime-500" />
          <div>
            <h5 className="text-lg font-semibold transition-all duration-300 ease-in-out group-hover:text-lime-500">
              Report Issue
            </h5>
            <p>Get priority support.</p>
          </div>
        </div>
        {/* info */}
        <div className="group flex cursor-pointer gap-2">
          <RiEarthLine className="size-14 rounded-lg bg-white px-3 py-1 transition-all duration-300 ease-in-out group-hover:text-lime-500" />
          <div>
            <h5 className="text-lg font-semibold transition-all duration-300 ease-in-out group-hover:text-lime-500">
              Community
            </h5>
            <p>Connect with fellow users.</p>
          </div>
        </div>
      </div>

      {/* Form div */}
      <div className="w-full">
        <h4 className="text-2xl font-semibold">How can we help you today?</h4>
        <p className="mb-8 mt-4 text-gray-700">
          Let us know who you are and what you&#39;re looking for below.
        </p>
        <form className="space-y-5">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="h-14 w-full rounded-lg border-none px-5 py-2 outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
              className="h-14 w-full rounded-lg border-none px-5 py-2 outline-none"
            />
          </div>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Message"
            className="w-full rounded-lg border-none px-5 py-2 outline-none"
          ></textarea>
          <button
            type="submit"
            className="h-14 w-full rounded-lg bg-lime-500 px-5 py-2 font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
