import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import book_img from "../assets/book_image.png";

const BookListCard = () => {
  return (
    <div className="p-6">
      <div>
        <img src={book_img} alt="Book Cover" />
      </div>
      <div>
        <h4>Young Adult</h4>
        <h4>Identity</h4>
      </div>
      <h3>The Catcher In the Rye</h3>
      <p>By: Awlad Hossain</p>
      <div>
        <p>Fiction</p>
        <div>
          <p>4.5</p>
          <IoMdStar />
        </div>
      </div>
    </div>
  );
};

BookListCard.propTypes = {};

export default BookListCard;
