import PropTypes from "prop-types";
import BookAddedListCard from "./BookAddedListCard";

const BookAddedList = ({ allBookList }) => {
  return (
    <section className="min-h-[calc(100vh-620px)]">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="gap grid grid-cols-3 gap-6 py-6 md:py-10">
          {allBookList.map((book) => (
            <BookAddedListCard key={book.book_id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

BookAddedList.propTypes = {};

export default BookAddedList;
