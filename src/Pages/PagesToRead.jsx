import { useLoaderData } from "react-router-dom";
import Chart from "../components/Chart";
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import { getReadListFromLS } from "../utils/localStoreManagement";
import { useEffect, useState } from "react";

const PagesToRead = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const readListIdFromLS = getReadListFromLS();
    const readList = allBooks.filter((book) =>
      readListIdFromLS.includes(book.book_id),
    );
    setReadList(readList);
  }, [allBooks]);

  return (
    <>
      <SecondaryPageHeader title="Pages To Read" />
      <Chart data={readList} />
    </>
  );
};

export default PagesToRead;
