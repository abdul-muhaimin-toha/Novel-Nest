import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

export const BookListLoader = async () => {
  const response = await fetch("/books.json");
  return response.json();
};
