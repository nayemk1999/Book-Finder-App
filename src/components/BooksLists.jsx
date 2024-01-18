/* eslint-disable react/prop-types */
import BookItem from "./BookItem";

const BooksLists = ({ books,onFavorite }) => {
  

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookItem book={book} key={book.id} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default BooksLists;
