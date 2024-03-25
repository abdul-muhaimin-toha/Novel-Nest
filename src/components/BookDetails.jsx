import PropTypes from "prop-types";
import cover_img from "../assets/book_details_cover.png";

const BookDetails = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex flex-col items-center justify-between px-2 py-12 md:px-4 md:py-16 lg:flex-row">
          <div className="flex w-full items-center justify-center rounded-3xl bg-[#f3f3f3] p-16 shadow-xl lg:w-6/12">
            <img src={cover_img} alt="Book Title" />
          </div>
          <div className="mt-20 w-full lg:mt-0 lg:w-6/12  lg:pl-10">
            <div>
              <h2 className="play-fair-display pb-2 text-4xl font-bold text-primary">
                The Catcher in the Rye
              </h2>
            </div>
            <div>
              <h4 className="border-b py-2 text-lg font-medium text-secondary">
                By: Awlad Hossain
              </h4>
            </div>
            <div>
              <h4 className="border-b py-2 text-lg font-medium text-secondary">
                Fiction
              </h4>
            </div>
            <p className="mt-3 font-normal text-black">
              <span className="text-lg font-semibold">Review:</span> Sit amet
              consectetur. Interdum porta pulvinar non sit aliquam. Aenean
              pulvinar blandit vel non enim elementum penatibus pellentesque ac.
              Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a
              auctor erat diam tellus. Fermentum faucibus nulla enim ornare. Id
              neque neque pretium enim platea urna non dictum. Faucibus
              dignissim ridiculus nibh tristique massa non.
            </p>
            <div>
              <div className="flex flex-col items-start gap-4 border-b py-4 md:flex-row md:items-center">
                <p className="text-black">Tag</p>
                <p className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary">
                  #young_adult
                </p>
                <p className="rounded-xl border-2 border-secondary px-3 py-1 text-secondary">
                  #identity
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4 border-b pb-4">
                <div className="flex max-w-md flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Number of Pages:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">281</p>
                  </div>
                </div>
                <div className="flex max-w-md flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Publisher:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">J.B Lippincott & Co.</p>
                  </div>
                </div>
                <div className="flex max-w-md flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Year of Publishing:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">1990</p>
                  </div>
                </div>
                <div className="flex max-w-md flex-col justify-between gap-1 text-lg md:flex-row md:gap-10">
                  <p className="w-full md:w-2/4">Rating:</p>
                  <div className="flex w-full md:w-2/4">
                    <p className="font-semibold">5.0</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-center gap-2 md:justify-start md:gap-6">
                <button className="btn min-w-32 border-none bg-primary px-8 text-base-100 duration-200 hover:bg-secondary">
                  Read
                </button>
                <button className="btn min-w-32 border-none bg-secondary px-8 text-base-100 duration-200 hover:bg-secondary">
                  Wish List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
