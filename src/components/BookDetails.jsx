import PropTypes from "prop-types";

import {
  getReadListFromLS,
  getWishListFromLS,
  updateReadListInLS,
  updateWishListInLS,
} from "../utils/localStoreManagement";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BookDetails = ({ book }) => {
  const {
    book_id,
    book_title,
    book_author,
    book_cover,
    category,
    tags,
    book_rating,
    book_review,
    total_page,
    publisher,
    year_of_publishing,
  } = book;

  const handleAddToReadList = () => {
    const readListFromLS = getReadListFromLS();
    const isAlreadyAdded = readListFromLS.find((bookId) => bookId === book_id);
    if (!isAlreadyAdded) {
      updateReadListInLS(book_id);
      toast("Book Added to read list", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Already Added to read list", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  const handleAddToWishList = () => {
    const wishListFromLS = getWishListFromLS();
    const isAlreadyAddedToWL = wishListFromLS.find(
      (bookId) => bookId === book_id,
    );
    const readListFromLS = getReadListFromLS();
    const isAlreadyAddedToRL = readListFromLS.find(
      (bookId) => bookId === book_id,
    );

    if (!isAlreadyAddedToWL && !isAlreadyAddedToRL) {
      updateWishListInLS(book_id);
      toast("Book Added to wish list", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (isAlreadyAddedToWL) {
      toast("Already Added to Wish list", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Already Added to Read list", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex flex-col items-center justify-between px-2 py-12 md:px-4 md:py-16 lg:flex-row">
          <div className="flex w-full items-center justify-center self-stretch rounded-3xl bg-[#f3f3f3] p-16 shadow-xl lg:w-6/12">
            <img
              src={book_cover}
              alt={book_title}
              className="h-72 w-64 object-cover"
            />
          </div>
          <div className="mt-20 w-full lg:mt-0 lg:w-6/12  lg:pl-10">
            <div>
              <h2 className="play-fair-display pb-2 text-4xl font-bold text-primary">
                {book_title}
              </h2>
            </div>
            <div>
              <h4 className="border-b py-2 text-lg font-medium text-secondary">
                <span className="font-bold">By:</span> {book_author}
              </h4>
            </div>
            <div>
              <h4 className="border-b py-2 text-lg font-medium text-secondary">
                {category}
              </h4>
            </div>
            <p className="mt-3 font-normal text-black">
              <span className="text-lg font-semibold">Review:</span>{" "}
              {book_review}
            </p>
            <div>
              <div className="flex flex-col items-start gap-4 border-b py-4 md:flex-row md:items-center">
                <p className="font-bold text-black">Tag</p>
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-4 border-b pb-4">
                <div className="flex max-w-lg flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Number of Pages:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">{total_page}</p>
                  </div>
                </div>
                <div className="flex max-w-lg flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Publisher:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">{publisher}</p>
                  </div>
                </div>
                <div className="flex max-w-lg flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Year of Publishing:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">{year_of_publishing}</p>
                  </div>
                </div>
                <div className="flex max-w-lg flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Rating:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">{book_rating}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex flex-col justify-center gap-2 md:flex-row md:justify-start md:gap-6">
                <button
                  onClick={handleAddToReadList}
                  className="btn  border-none bg-primary px-8 text-base-100 duration-200 hover:bg-secondary"
                >
                  Add to ReadList
                </button>
                <button
                  onClick={handleAddToWishList}
                  className="btn  border-none bg-secondary px-8 text-base-100 duration-200 hover:bg-secondary"
                >
                  Add to Wish List
                </button>
              </div>
              <div className="mt-16 flex justify-end">
                <Link
                  to={-1}
                  className="px-8 text-xl font-bold text-primary duration-200 hover:bg-transparent"
                >
                  &larr; Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetails;
