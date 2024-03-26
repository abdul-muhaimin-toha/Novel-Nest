import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout, { BookListLoader } from "./RootLayout";
import HomePage from "./Pages/HomePage";
import ListedBooksPage from "./Pages/ListedBooksPage";
import BookDetailsPage from "./Pages/BookDetailsPage";
import PagesToRead from "./Pages/PagesToRead";
import ErrorPage from "./components/ErrorPage";
import ErrorBook from "./components/ErrorBook";
import TestimonialPage, {
  TestimonialLoaderData,
} from "./Pages/TestimonialPage";
import OurTeamPage from "./Pages/OurTeamPage";

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
      <Route
        path="pages-to-read"
        element={<PagesToRead />}
        loader={BookListLoader}
      />
      <Route path="our-team" element={<OurTeamPage />} />
      <Route
        path="/testimonial"
        element={<TestimonialPage />}
        loader={TestimonialLoaderData}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);
