import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { bcg1, bcg2, bcg3, bcg4, bcg5 } from "../assets";

const Slider = () => {
  return (
    <>
      <div
        className="z-10 w-[1265px] max-xxl:w-full  h-[568px] max-xxl:h-[400px] max-xl:h-[274px]
    rounded-[30px] absolute max-xxl:relative right-[67px] max-xxl:right-0 overflow-hidden"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover opacity-65"
              src={bcg1}
              alt="background"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover opacity-65"
              src={bcg2}
              alt="background"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover opacity-65"
              src={bcg3}
              alt="background"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover opacity-65"
              src={bcg4}
              alt="background"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover opacity-65"
              src={bcg5}
              alt="background"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="absolute right-[110px] max-xxl:right-[26px] 
      bottom-[50px] max-xxl:bottom-[28px] flex gap-[35px] 
      max-xxl:gap-[20px] z-50"
      >
        <button
          className="group size-12 max-xxl:size-[32px] border border-[#ffffff] rounded-full 
        flex justify-center items-center hover:bg-[#ffffff] cursor-pointer hero-prev"
          type="button"
        >
          <BsArrowLeft className="text-[#ffffff] text-[24px] max-xxl:text-[18px] group-hover:text-[#000000] " />
        </button>
        <button
          type="button"
          className="group size-12 max-xxl:size-[32px] border border-[#ffffff] rounded-full 
        flex justify-center items-center hover:bg-[#ffffff] cursor-pointer hero-next"
        >
          <BsArrowRight className="text-[#ffffff] text-[24px] max-xxl:text-[18px] group-hover:text-[#000000] " />
        </button>
      </div>
    </>
  );
};
export default Slider;
