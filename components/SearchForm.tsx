import { Input } from "@/components/ui/input";

const SearchForm = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Input
          placeholder="Search for books"
          type="text"
          className="bg-white md:w-96 w-60 mt-10 h-10 rounded-xl"
        />
      </div>
    </div>
  );
};
export default SearchForm;
