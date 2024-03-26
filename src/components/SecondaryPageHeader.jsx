const SecondaryPageHeader = ({ title }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex items-center justify-center pb-6 pt-16">
          <h2 className="play-fair-display text-4xl font-bold text-secondary md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SecondaryPageHeader;
