import Book from './Book';
import books from './books';

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} />;
      })}
    </section>
  );
}

export default BookList;
