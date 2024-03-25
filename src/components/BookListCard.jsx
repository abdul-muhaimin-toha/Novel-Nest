import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import book_img from "../assets/book_image.png";

const BookListCard = () => {
  return (
    <div className="rounded-2xl border border-primary-content p-6 shadow-xl">
      <div className="mb-6 flex justify-center rounded-2xl border border-secondary-content bg-[#f3f3f3] px-16 py-8 shadow-md">
        <img src={book_img} alt="Book Cover" />
      </div>
      <div className="mb-5 flex gap-2 text-xs font-medium">
        <h4 className="rounded-xl border-2 border-secondary px-3 py-1 text-primary">
          Young Adult
        </h4>
        <h4 className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary">
          Identity
        </h4>
      </div>
      <h3 className="play-fair-display mb-5 text-3xl font-bold text-primary">
        The Catcher In the Rye
      </h3>
      <p className="mb-4 text-lg font-medium text-secondary">
        By: Awlad Hossain
      </p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium text-black">Fiction</p>
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium text-black">4.5</p>
          <IoMdStar className="text-2xl text-primary" />
        </div>
      </div>
    </div>
  );
};

BookListCard.propTypes = {};

export default BookListCard;
