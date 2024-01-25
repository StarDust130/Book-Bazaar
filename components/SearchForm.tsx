"use client";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { useGlobalContext } from "@/app/context";
import { useRef, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

const SearchForm: React.FC = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchText.current) {
      searchText.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current?.value.trim() || "";

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    router.push("/book");
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="relative">
        <Input
          placeholder="Search for books"
          type="text"
          onSubmit={handleSubmit}
          ref={searchText}
          className="bg-gray-50 text-black w-80 md:w-[40rem] h-10 px-5  rounded-xl border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <div
          onClick={handleSubmit}
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
        >
          <IoSearch className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
