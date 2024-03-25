import PropTypes from "prop-types";
import BookListCard from "./BookListCard";

const BooksList = () => {
  return (
    <section className="mt-24 md:mt-28">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="play-fair-display text-center text-5xl font-bold text-secondary md:text-6xl">
            Book List
          </h2>
        </div>
        <div className="mb-24 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
          <BookListCard />
        </div>
      </div>
    </section>
  );
};

BooksList.propTypes = {};

export default BooksList;
