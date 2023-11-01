import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Friends, Lovers, and the Big Terrible Thing: A Memoir",
    author: "Matthew Perry",
    img_src: "./images/book1.jpg",
    img_alt: "Mathew Perry's memoir",
    id: 1,
  },
  {
    title: "The Woman in Me",
    author: "Britney Spears ",
    img_src: "https://m.media-amazon.com/images/I/61BWsc9eGbL._SY466_.jpg",
    img_alt: "Britney Spears memoir",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, title, img_src, img_alt, id } = book;
        return (
          <Book
            key={id}
            author={author}
            title={title}
            img_src={img_src}
            img_alt={img_alt}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img_src, img_alt, children } = props;
  return (
    <article className="book">
      <img src={img_src} alt={img_alt} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* where you place children depends on where you want to render it */}
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
