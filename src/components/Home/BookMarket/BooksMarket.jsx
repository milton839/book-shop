import { useEffect, useState } from "react";
import BooksList from "./BooksList";
import SearchBook from "./SearchBook";


const BooksMarket = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("/public/data.JSON")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [])
  return (
    <main className="my-10 lg:my-14">
      <SearchBook />
      <BooksList books = {books} />
    </main>
  )
}

export default BooksMarket