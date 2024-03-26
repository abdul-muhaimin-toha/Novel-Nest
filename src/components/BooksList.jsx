import PropTypes from "prop-types";
import BookListCard from "./BookListCard";
import { useState } from "react";

const BooksList = ({ books }) => {
  const [showItemsNumber, setShowItemsNumber] = useState(6);
  return (
    <section className="mt-24 md:mt-28">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="mb-10 flex flex-col items-center justify-center gap-8 text-center md:mb-14">
          <h2 className="play-fair-display text-center text-4xl font-bold text-secondary md:text-5xl">
            Book List
          </h2>
          <p className="max-w-md">
            Dive into a Rich Tapestry of Literature: A Curated Selection
            Spanning Various Genres, Authors, and Time Periods!
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {books.slice(0, showItemsNumber).map((book) => (
            <BookListCard key={book.book_id} book={book} />
          ))}
        </div>
        <div className="mb-20 flex items-center justify-center">
          <button
            onClick={() => setShowItemsNumber(books.length)}
            className={`${showItemsNumber === books.length ? "hidden" : "block"} btn border-none bg-primary px-6 text-base-100 duration-200 hover:bg-secondary`}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
