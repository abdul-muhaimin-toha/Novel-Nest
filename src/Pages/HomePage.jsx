import Hero from "../components/Hero";
import BookList from "../components/BooksList";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const books = useLoaderData();

  return (
    <>
      <Hero />
      <BookList books={books} />
    </>
  );
};

export default HomePage;
