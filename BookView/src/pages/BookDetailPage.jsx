// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// function BookDetailPage(){
//     const [book, setBook] = useState(null);
//     const { id } = useParams();

//      if (!id) return;
//     useEffect(()=>{
//         fetch(`https://openlibrary.org/works/${id}.json`)
//         .then(res => res.json())
//         .then(data => setBook(data))
//         .catch(err => console.error("Fetch error:", err));
//     },[id])

//      if (!book) return <div>Loading...</div>;

//      return(
//         <div>
//             <h1>{book.title}</h1>
//             <p>{book.description ? (book.description.value || book.description) : "No description available"}</p>
//         </div>
//      )
// }

// export default BookDetailPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  console.log("Book ID from params:", id); // Add this line

  useEffect(() => {
    if (!id) return;
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description ? (book.description.value || book.description) : "No description available"}</p>
    </div>
  );
}

export default BookDetailPage;
