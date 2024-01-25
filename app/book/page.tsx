import BookList from "@/components/BookList";
import Header from "@/components/Header";
import Hero from "../_components/Hero";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      {" "}
      <Header />
      <Hero />
      <BookList />
      <Footer />
    </div>
  );
};
export default page;
