import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BooksList from "./components/BooksList";
import Footer from "./components/Footer";
import BookDetails from "./components/BookDetails";
import SecondaryPageHeader from "./components/SecondaryPageHeader";
import BookAddedList from "./components/BookAddedList";

function App() {
  return (
    <>
      <Navbar />
      <SecondaryPageHeader />
      <BookAddedList />
      <Footer />
    </>
  );
}

export default App;
