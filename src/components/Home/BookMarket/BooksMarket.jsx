import BooksList from "./BooksList";
import SearchBook from "./SearchBook";


const BooksMarket = () => {
  return (
    <main className="my-10 lg:my-14">
      <SearchBook />
      <BooksList />
    </main>
  )
}

export default BooksMarket