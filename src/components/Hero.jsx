import hero_img from "../assets/hero_book.png";

const Hero = () => {
  return (
    <section className=" mt-6 md:mt-10 lg:mt-12">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex flex-col items-center  justify-between gap-16 rounded-3xl bg-[#F3F3F3] px-8 py-8 shadow-xl md:flex-row md:py-12 lg:px-12 lg:py-16">
          <div className=" flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="play-fair-display mb-8 max-w-xl text-5xl font-bold text-secondary md:mb-12 md:text-6xl">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn border-none bg-primary px-6 text-base-100 duration-200 hover:bg-secondary">
              View The List
            </button>
          </div>
          <div>
            <img src={hero_img} alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
