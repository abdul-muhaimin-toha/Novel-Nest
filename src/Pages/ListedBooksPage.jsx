import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaAngleDown } from "react-icons/fa";
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import BookAddedList from "../components/BookAddedList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getReadListFromLS,
  getWishListFromLS,
} from "../utils/localStoreManagement";
import toast from "react-hot-toast";

const ListedBooksPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [allReadList, setAllReadList] = useState([]);
  const [allWishList, setAllWishList] = useState([]);
  const [displayReadList, setDisplayReadList] = useState([]);
  const [displayWishList, setDisplayWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const allReadListIdFromLS = getReadListFromLS();
    const allWishListIdFromLS = getWishListFromLS();
    const readList = allBooks.filter((book) =>
      allReadListIdFromLS.includes(book.book_id),
    );
    const wishList = allBooks.filter((book) =>
      allWishListIdFromLS.includes(book.book_id),
    );
    setAllReadList(readList);
    setAllWishList(wishList);
    setDisplayReadList(readList);
    setDisplayWishList(wishList);
  }, [allBooks]);

  const handleSort = (sortBy) => {
    if (sortBy === "none") {
      setDisplayReadList(allReadList);
      setDisplayWishList(allWishList);
      toast("Sorting Clear", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (sortBy === "rating") {
      const sortByRatingReadList = allReadList
        .slice(0)
        .sort((a, b) => b.book_rating - a.book_rating);

      const sortByRatingWishList = allWishList
        .slice(0)
        .sort((a, b) => b.book_rating - a.book_rating);

      setDisplayReadList(sortByRatingReadList);
      setDisplayWishList(sortByRatingWishList);
      toast("Sorted by Rating", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (sortBy === "pages") {
      const sortByPageReadList = allReadList
        .slice(0)
        .sort((a, b) => b.total_page - a.total_page);

      const sortByPageWishList = allWishList
        .slice(0)
        .sort((a, b) => b.total_page - a.total_page);

      setDisplayReadList(sortByPageReadList);
      setDisplayWishList(sortByPageWishList);
      toast("Sorted by Page Number", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (sortBy === "year") {
      const sortByYearReadList = allReadList
        .slice(0)
        .sort((a, b) => b.year_of_publishing - a.year_of_publishing);

      const sortByYearWishList = allWishList
        .slice(0)
        .sort((a, b) => b.year_of_publishing - a.year_of_publishing);

      setDisplayReadList(sortByYearReadList);
      setDisplayWishList(sortByYearWishList);
      toast("Sorted by Published Year", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <SecondaryPageHeader title="Books Added To Your List" />
      <div className="mx-auto my-10 max-w-7xl px-3 lg:px-6">
        <div className="flex items-center justify-center pb-32">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-primary text-white hover:bg-primary"
            >
              Sort Your Books by <FaAngleDown className="ml-3 text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 space-y-4 rounded-box bg-secondary p-6 text-white shadow"
            >
              <button onClick={() => handleSort("none")}>Clear Sorting</button>
              <button onClick={() => handleSort("rating")}>Rating</button>
              <button onClick={() => handleSort("pages")}>Pages</button>
              <button onClick={() => handleSort("year")}>Published Year</button>
            </ul>
          </div>
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <p className="py-2 text-lg font-medium text-primary">
                Read Books
              </p>
            </Tab>
            <Tab>
              <p className="py-2 text-lg font-medium text-primary ">
                Books WishList
              </p>
            </Tab>
          </TabList>
          <TabPanel>
            <BookAddedList allBookList={displayReadList} />
          </TabPanel>
          <TabPanel>
            <BookAddedList allBookList={displayWishList} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooksPage;
