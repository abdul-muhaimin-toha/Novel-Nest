const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-xl">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="navbar m-0 px-0 py-3">
          <div className="navbar-start ">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost pl-0 text-primary duration-200 hover:bg-transparent hover:text-secondary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-4 w-52 gap-3 rounded-md bg-base-100 pl-3 text-base font-medium text-black shadow-lg"
              >
                <li>Home</li>
                <li>Listed Books</li>
                <li>Pages to read</li>
              </ul>
            </div>
            <a
              href=""
              className="p-0 text-xl font-bold text-primary duration-200 hover:bg-transparent hover:text-secondary"
            >
              Novel Nest
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-6 px-1 text-base font-medium text-black">
              <li className="duration-200 hover:text-primary">Home</li>
              <li className="duration-200 hover:text-primary">Listed Books</li>
              <li className="duration-200 hover:text-primary">Pages to read</li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <a className="btn border-none bg-primary text-base-100 duration-200 hover:bg-secondary md:px-6">
              Sign In
            </a>
            <a className="btn border-none bg-secondary text-base-100 duration-200 hover:bg-primary md:px-6">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
