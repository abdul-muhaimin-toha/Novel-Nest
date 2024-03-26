import { Link } from "react-router-dom";

const ErrorBook = () => {
  return (
    <section className=" flex items-center justify-center bg-cover bg-center">
      <div className="mx-auto max-w-screen-2xl p-1">
        <div className="animate__animated animate__fadeInUp flex flex-col items-center justify-center py-20">
          <h2 className="play-fair-display mb-4 text-center text-3xl font-bold text-black md:text-5xl md:font-extrabold">
            Book Not Found
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <Link
              to={-1}
              className=" btn min-w-52 rounded-md border-none bg-primary px-4 text-white  hover:bg-secondary md:flex "
            >
              Go back to Previous Page
            </Link>
            <Link
              to="/"
              className=" btn  min-w-52 rounded-md border-none bg-secondary px-4 text-white hover:bg-primary md:flex "
            >
              Go back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorBook;
