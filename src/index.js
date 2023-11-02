import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Friends, Lovers, and the Big Terrible Thing: A Memoir",
    author: "Matthew Perry",
    img_src: "./images/book1.jpg",
    img_alt: "Mathew Perry's memoir",
    id: 0,
  },
  {
    title: "The Woman in Me",
    author: "Britney Spears ",
    img_src: "https://m.media-amazon.com/images/I/61BWsc9eGbL._SY466_.jpg",
    img_alt: "Britney Spears memoir",
    id: 1,
  },
];

const BookList = () => {
  const getBook = (id) => {
    //search and find the book whose id matches with the id passed into getBook()
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img_src, img_alt, id, getBook } = props;
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img_src} alt={img_alt} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        display title
      </button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
