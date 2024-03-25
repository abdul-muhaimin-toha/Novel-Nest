import PropTypes from "prop-types";
import { CiTimer } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { MdFindInPage } from "react-icons/md";
import book_details_image from "../assets/book_details.png";

const BookAddedListCard = (props) => {
  return (
    <div className="col-span-3 flex flex-col gap-6 rounded-2xl  border border-primary-content p-6 shadow-xl md:flex-row">
      <div className="flex items-center justify-center rounded-lg bg-[#f3f3f3] px-8 py-4">
        <img src={book_details_image} alt="Book Title" />
      </div>
      <div>
        <h4 className="play-fair-display mb-3 text-3xl font-bold text-primary">
          The Catcher In The Ray
        </h4>
        <h5 className="mb-3 text-lg font-semibold text-secondary">
          By: Awlad Hossain
        </h5>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold text-black">Tag</p>
            <p className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary">
              #young_adult
            </p>
            <p className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary">
              #identity
            </p>
          </div>
          <div className="flex gap-3 text-black">
            <CiTimer className="text-2xl text-primary" />
            <p className="text-black">Year of Publishing: 1993</p>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center justify-start gap-4">
            <RiPagesLine className="text-2xl text-primary" />
            <p className="text-black">Publisher: Scribber</p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <MdFindInPage className="text-2xl text-primary" />
            <p className="text-black">Page: 192</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-row gap-4">
            <a className="flex items-center justify-center rounded-full border-none bg-blue-200 px-4 py-2 text-xs text-black duration-200 ">
              Category: Classic
            </a>
            <a className="flex items-center justify-center rounded-full border-none bg-blue-200 px-4 py-2 text-xs text-black duration-200 ">
              Rating: 5.0
            </a>
          </div>
          <a className="btn mt-3 w-full self-start border-none bg-secondary text-base-100 duration-200 hover:bg-primary md:mt-0 md:w-auto md:px-6">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

BookAddedListCard.propTypes = {};

export default BookAddedListCard;
