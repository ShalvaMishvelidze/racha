import Slider from "./Slider";

const Hero = () => {
  return (
    <section className="relative h-[710px] pt-[142px] mx-25 flex flex-col justify-center">
      <Slider />
      <div className="z-20 flex flex-col gap-10">
        <h1 className="max-w-[983px] text-[60px] leading-[38px] text-[#25304A] font-bold">
          რაჭა ჩვენი სიყვარულია
        </h1>
        <p className="max-w-[983px] text-[20px] leading-[25px] text-[#25304A] font-bold">
          ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და
          ღირსშესანიშნაობებს.
        </p>
      </div>
      <div className="absolute left-0 bottom-0 flex gap-[21px] items-center">
        <h1 className="leading-[32px] text-[#25304A] font-bold">DARK MODE</h1>
        <button
          type="button"
          className="cursor-pointer relative w-[108px] h-[40px] bg-[#bbbbbb] rounded-[50px] "
        >
          <div className="size-[28px] bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-[6px]"></div>
        </button>
      </div>
      <h2
        className="text-[20px] text-[#25304A] rotate-90 w-auto 
      absolute -right-27 bottom-20 z-100 "
      >
        Racha with love 2022
      </h2>
    </section>
  );
};
export default Hero;
