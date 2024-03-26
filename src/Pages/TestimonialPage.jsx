import { useLoaderData } from "react-router-dom";
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import TestimonialList from "../components/TestimonialList";

const TestimonialPage = () => {
  const testimonials = useLoaderData();
  return (
    <>
      <SecondaryPageHeader title="What Our Customer Says About Us" />
      <TestimonialList testimonials={testimonials} />
    </>
  );
};

export default TestimonialPage;

export const TestimonialLoaderData = async () => {
  const response = await fetch("/testimonials.json");
  return response.json();
};
