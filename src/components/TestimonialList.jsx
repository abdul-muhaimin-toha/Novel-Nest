import PropTypes from "prop-types";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ testimonials }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className=" grid grid-cols-1 gap-6 py-6 md:grid-cols-2 md:py-10 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialList.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default TestimonialList;
