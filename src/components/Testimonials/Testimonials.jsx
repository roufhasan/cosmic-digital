import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";
import { testimonialsData } from "../../assets/data/testimonialsData";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <section>
        {/* Section Title */}
        <SectionTitle
          title="What Our Clients Love About Us"
          subTitle="testimonial"
        />

        {/* Testimonials Container */}
        <div id="testimonialSwiper">
          <Swiper
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={24}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {testimonialsData.map(
              ({ id, profileImg, name, designation, review }) => (
                <SwiperSlide key={id}>
                  <div className="rounded-[10px] border border-[#e6e6e6] p-7 md:p-[50px] md:pr-11">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-5">
                        <img
                          src={profileImg}
                          alt={`${name} image`}
                          loading="lazy"
                          className="h-16 w-16 rounded-[50%] border border-[#84cc16]"
                        />
                        <div>
                          <h1 className="text-xl font-bold">{name}</h1>
                          <p>{designation}</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="54"
                        height="42"
                        viewBox="0 0 54 42"
                        fill="none"
                        className="hidden md:block"
                      >
                        <path
                          d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                          fill="#a3e635"
                        />
                        <path
                          d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                          fill="#a3e635"
                        />
                      </svg>
                    </div>
                    <p className="mb-5 mt-5 md:mb-0">{review}</p>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
