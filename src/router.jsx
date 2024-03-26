import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout, { BookListLoader } from "./RootLayout";
import HomePage from "./Pages/HomePage";
import ListedBooksPage from "./Pages/ListedBooksPage";
import BookDetailsPage from "./Pages/BookDetailsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={BookListLoader} />
      <Route
        path="listed-books"
        element={<ListedBooksPage />}
        loader={BookListLoader}
      />

      <Route
        path="book-details/:bookId"
        element={<BookDetailsPage />}
        loader={BookListLoader}
      />
    </Route>,
  ),
);
