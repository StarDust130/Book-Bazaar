"use client";
import { useRouter } from "next/navigation";
import Loading from "../../../app/loading";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface BookDetailsProps {
  id: string;
}

interface Params {
  slug: any;
  bookId: string; // Add the bookId property
}

const BookDetails: React.FC<BookDetailsProps & { params: Params }> = ({
  params,
}: {
  params: Params;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<any>(null);

  const { bookId } = params;
  console.log(bookId);

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${bookId}.json`
        );
        const data = await response.json();
        if (data) {
          console.log("data", data);
          const {
            description,
            title,
            covers,
            subject_places,
            first_publish_date,

            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : "/no-image.png",
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
            first_publish_date,
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [bookId]);

  if (loading) return <Loading />;

  return (
    <section className="book-details  py-10">
      <div className="container mx-auto">
        <button
          type="button"
          className="flex items-center  transition duration-300"
          onClick={() => router.push("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="text-lg font-semibold ml-2">Go Back</span>
        </button>

        <div className="book-details-content grid md:grid-cols-2 gap-8 mt-8">
          <div className="book-details-img">
            <Image
              src={book?.cover_img}
              alt="cover img"
              height={500}
              width={500}
              className="rounded-lg"
            />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <h1 className="text-3xl font-bold">{book?.title}</h1>
            </div>
            <div className="book-details-item description mt-4">
              <p className="text-gray-700">{book?.description}</p>
            </div>
            <div className="book-details-item mt-4">
              <span className="font-semibold">Subject Places:</span>
              <span className="text-italic ml-2">{book?.subject_places}</span>
            </div>
            <div className="book-details-item mt-2">
              <span className="font-semibold">Subject Times:</span>
              <span className="text-italic ml-2">{book?.subject_times}</span>
            </div>
            <div className="book-details-item mt-2">
              <span className="font-semibold">Subjects:</span>

              <span className="ml-2">{book?.subjects}</span>
            </div>
            <span className="font-semibold">
              first_publish_date:{book?.first_publish_date}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
