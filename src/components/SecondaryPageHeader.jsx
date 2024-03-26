import PropTypes from "prop-types";

const SecondaryPageHeader = ({ title }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex items-center justify-center pb-6 pt-16 text-center">
          <h2 className="play-fair-display text-4xl font-bold text-secondary md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

SecondaryPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SecondaryPageHeader;
