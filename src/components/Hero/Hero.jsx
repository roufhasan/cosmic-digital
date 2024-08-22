import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "../Button/Button";
import sliderImg1 from "../../assets/images/slider-1.png";
import sliderImg2 from "../../assets/images/slider-2.jpg";
import sliderImg3 from "../../assets/images/slider-3.jpg";
import sliderImg4 from "../../assets/images/slider-4.jpg";
import sliderImg5 from "../../assets/images/slider-5.png";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

const Hero = () => {
  return (
    <Swiper
      id="home"
      className="mySwiper mx-auto h-screen max-h-[1080px] min-h-[600px] w-full max-w-[1920px]"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {/* Slide 1 */}
      <SwiperSlide
        style={{ background: "linear-gradient(135deg, #000, #434343)" }}
        className="h-full w-full"
      >
        <div className="flex flex-col-reverse items-center justify-between px-4 pt-20 text-white md:flex-row md:px-10">
          <div className="md:w-1/2">
            <h1 className="max-w-[610px] text-2xl font-bold md:text-4xl">
              Building Cutting-Edge Websites for Your Business
            </h1>
            <p className="mb-12 mt-5 max-w-xl text-lg font-medium text-gray-400 md:text-2xl">
              We create responsive, high-performance websites & web-apps
              tailored to your needs.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="md:w-1/2">
            <img src={sliderImg1} alt="" className="w-full" />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide
        className="h-full w-full"
        style={{ background: "linear-gradient(35deg, #002eff, #ffa04c)" }}
      >
        <div className="flex flex-col-reverse items-center justify-between px-4 pt-20 text-white md:flex-row md:px-10">
          <div className="md:w-1/2">
            <h1 className="max-w-[610px] text-2xl font-bold md:text-4xl">
              Crafting <span className="text-[#01d3ff]">Visual </span>
              <span className="text-[#ff9fde]">Stories </span>{" "}
              <br className="md:hidden" />
              with Stunning Graphics
            </h1>
            <p className="mb-12 mt-5 max-w-xl text-lg font-medium text-gray-400 md:text-2xl">
              Our creative team designs impactful visuals that resonate with
              your brand’s identity.
            </p>
            <Button>Explore Services</Button>
          </div>
          <div className="grid grid-cols-12 grid-rows-2 gap-3 py-2.5 md:mt-10 md:w-1/2">
            <img
              src={sliderImg2}
              alt=""
              className="col-span-5 row-span-2 h-full w-full rounded object-cover shadow"
            />
            <img
              src={sliderImg3}
              alt=""
              className="col-span-7 h-full w-full rounded object-cover shadow"
            />
            <img
              src={sliderImg4}
              alt=""
              className="col-start-6 col-end-13 h-full w-full rounded object-cover shadow"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide
        style={{
          background: "linear-gradient(#0f2027, #203a43, #2c5364)",
        }}
        className="h-full w-full"
      >
        <div className="flex flex-col-reverse items-center justify-between px-4 pt-20 text-white md:flex-row md:px-10">
          <div className="md:w-[40%]">
            <h1 className="max-w-[610px] text-2xl font-bold md:text-4xl">
              Delivering Innovative <br className="md:hidden" /> User
              Experiences
            </h1>
            <p className="mb-12 mt-5 max-w-xl text-lg font-medium text-gray-400 md:text-2xl">
              We design intuitive interfaces that offer your users an engaging
              and effortless experience.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="md:w-[60%]">
            <img src={sliderImg5} alt="" className="w-[100%]" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
