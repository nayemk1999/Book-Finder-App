import BooksLists from "./BooksLists";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import NavBar from "./NavBar";
import data from "../data.json";
import { useState } from "react";
const Layout = () => {
  const [books, setBooks] = useState([...data]);
  function handleSearch(searchTerm) {
    if (searchTerm) {
      const filtered = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks([...filtered]);
    } else {
      setBooks([...data]);
    }
  }

  function handleFavorite(bookId) {
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return { ...book, favourite: !book.favourite };
        } else {
          return book;
        }
      })
    );
  }

  function handleSort(sortDirection) {
    const newData = [...books];
    if (sortDirection) {
      const sortingData = newData.sort((a, b) => {
        if (sortDirection === "name_asc") {
          return a.name.localeCompare(b.name);
        } else if (sortDirection === "name_desc") {
          return b.name.localeCompare(a.name);
        } else if (sortDirection === "year_asc") {
          return a.publish_year - b.publish_year;
        } else if (sortDirection === "year_desc") {
          return b.publish_year - a.publish_year;
        }
      });
      setBooks(sortingData);
    } else {
      setBooks([...data]);
    }
  }

  return (
    <div className="relative font-[Manrope] mx-auto before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <NavBar />
      <main className="my-10 lg:my-14">
        {/* header */}
        <HeroHeader onSearch={handleSearch} onSort={handleSort} />
        {/* header ends */}
        {/* Book Grid */}
        <BooksLists books={books} onFavorite={handleFavorite} />
        {/* Book Grid Ends */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
