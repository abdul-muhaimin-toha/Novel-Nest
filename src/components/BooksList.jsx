import PropTypes from "prop-types";
import BookListCard from "./BookListCard";

const BooksList = () => {
  return (
    <section className="mt-28">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="mb-9">
          <h2 className="play-fair-display text-center text-5xl font-bold text-secondary md:text-6xl">
            Books
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
