import SecondaryPageHeader from "../components/SecondaryPageHeader";
import BookDetails from "../components/BookDetails";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const targetedBook = books.find((book) => book.book_id == bookId);

  return (
    <>
      <SecondaryPageHeader title="Book Details" />
      <BookDetails book={targetedBook} />
    </>
  );
};

export default BookDetailsPage;
