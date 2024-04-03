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

    const handleIsFavourite = (bookId) =>{
        const bookIndex = books.findIndex(book => book.id === bookId);
        const newBooks = [...books]
        newBooks[bookIndex].isFavourite = !newBooks[bookIndex].isFavourite
        setBooks(newBooks)
    }

    const handleSort = (sortBy) =>{
        if (sortBy == "name_asc") {
            const newBookListBySorting = books.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
            
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });
            setBooks([...newBookListBySorting])
        }
        if (sortBy == "name_desc") {
            const newBookListBySorting = books.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
            
                if (titleA < titleB) return 1;
                if (titleA > titleB) return -1;
                return 0;
            });
            setBooks([...newBookListBySorting])
        }
        if (sortBy == "year_asc") {
            const newBookListBySorting = books.sort((a, b) => {
                return parseInt(a.publishYear) - parseInt(b.publishYear);
            });
            setBooks([...newBookListBySorting])
        }
        if (sortBy == "year_desc") {
            const newBookListBySorting = books.sort((a, b) => {
                return parseInt(b.publishYear) - parseInt(a.publishYear);
            });
            setBooks([...newBookListBySorting])
        }
    }
  return (
    <main className="my-10 lg:my-14">
      <SearchBook onSearch={handleSearch} onSort = {handleSort} />
      <BooksList books = {books} onFavourite={handleIsFavourite} />
    </main>
  )
}

export default BooksMarket