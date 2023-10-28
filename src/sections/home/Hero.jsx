const Hero = () => {
  return (
    <section
      id="home"
      className="padding w-full flex xl:flex-row flex-col justify-center min-h-full gap-10 max-container max-sm:p-0"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-32 max-sm:pt-24">
        <img
          src="imgs/home/dot.png"
          alt=""
          width={16}
          height={16}
          className="max-sm:mb-2"
        />
        <h1 className="text-primary-orange text-4xl max-sm:text-3.5xl max-sm:leading-[38px] leading-[72px] font-bold">
          聰明用餐，輕鬆經營
        </h1>
        <p className="text-2.5xl max-sm:text-base">
          DineTech 是一套專為小型餐飲業者
        </p>
        <p className="text-2.5xl max-sm:text-base">
          設計的 iPad POS 點餐系統。
        </p>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-sm:py-0 max-sm:px-2">
        <img src="imgs/home/img_banner.png" alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default Hero;
