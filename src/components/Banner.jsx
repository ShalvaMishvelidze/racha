import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { bcg1, bcg2, bcg3, bcg4, bcg5 } from "../assets";
const Banner = () => {
  return (
    <>
      <div
        className="w-[1426px] h-[401px] max-lg:h-[320px] max-xxl:w-full max-sm:h-[179px] 
    rounded-[30px] absolute right-[67px] max-xxl:right-auto 
    z-10 overflow-hidden"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
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
      <div className="flex absolute right-[90px] max-xxl:right-[26px] bottom-[30px] max-lg:bottom-[-30px] max-sm:bottom-0 max-xl:bottom-[28px] gap-[35px] max-xl:gap-[20px] z-50">
        <button
          className="group size-12 max-xl:size-[32px] border border-[#ffffff] rounded-full 
            flex justify-center items-center hover:bg-[#ffffff] cursor-pointer banner-prev"
          type="button"
        >
          <BsArrowLeft className="text-[#ffffff] text-[24px] max-xl:text-[18px] group-hover:text-[#000000] " />
        </button>
        <button
          type="button"
          className="group size-12 max-xl:size-[32px] border border-[#ffffff] rounded-full 
            flex justify-center items-center hover:bg-[#ffffff] cursor-pointer banner-next"
        >
          <BsArrowRight className="text-[#ffffff] text-[24px] max-xl:text-[18px] group-hover:text-[#000000] " />
        </button>
      </div>
    </>
  );
};
export default Banner;
