import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=harry+potter")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
        setLoading(false);
      });
  }, []);

   if (loading) return <div>Loading books...</div>;
    return(
        <div>
            <ul>
                {books.map((book)=>{
                    const workId = book.key.replace("/works/","")
                    return(
                        <li key={workId}>
                            <Link to={`/book/${workId}`}>
                                {book.title} by {book.author_name?.join(", ") || "Unknown"}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home