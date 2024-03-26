import PropTypes from "prop-types";
import BookAddedListCard from "./BookAddedListCard";

const BookAddedList = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="gap grid grid-cols-3 gap-6 py-6 md:py-10">
          <BookAddedListCard />
          <BookAddedListCard />
          <BookAddedListCard />
          <BookAddedListCard />
          <BookAddedListCard />
          <BookAddedListCard />
        </div>
      </div>
    </section>
  );
};

BookAddedList.propTypes = {};

export default BookAddedList;
