import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-364px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default RootLayout;

export const BookListLoader = async () => {
  const response = await fetch("/books.json");
  return response.json();
};
