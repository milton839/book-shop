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

    const handleSearch = (searchBook) =>{
        const filteredBook = books.filter((book) => book.title.toLowerCase() === searchBook.toLowerCase());
        if (filteredBook) {
            setBooks([...filteredBook])
        }
    }
  return (
    <main className="my-10 lg:my-14">
      <SearchBook onSearch={handleSearch}/>
      <BooksList books = {books} />
    </main>
  )
}

export default BooksMarket