import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

const BookListCard = ({ book }) => {
  const {
    book_id,
    book_title,
    book_author,
    book_cover,
    category,
    tags,
    book_rating,
  } = book;
  return (
    <Link to={`/book-details/${book_id}`}>
      <div className="rounded-2xl border border-primary-content p-6 shadow-xl">
        <div className="mb-6 flex justify-center rounded-2xl border border-secondary-content bg-[#f3f3f3] px-16 py-8 shadow-md">
          <img
            src={book_cover}
            alt={`Thumbnail for ${book_title}`}
            className="h-48 object-cover"
          />
        </div>
        <div className="mb-5 flex  flex-wrap gap-2 text-xs font-medium">
          {tags.map((tag, index) => (
            <h4
              key={index}
              className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary"
            >
              {tag}
            </h4>
          ))}
        </div>
        <h3 className="play-fair-display  min-h-20 text-3xl font-bold text-primary">
          {book_title}
        </h3>
        <p className="mb-4 text-lg font-medium text-secondary">
          <span className="font-bold">By:</span> {book_author}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-black">{category}</p>
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium text-black">{book_rating}</p>
            <IoMdStar className="text-2xl text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

BookListCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookListCard;
