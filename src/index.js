import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "Friends, Lovers, and the Big Terrible Thing: A Memoir",
  author: "Matthew Perry",
  img_src: "./images/book1.jpg",
  img_alt: "Mathew Perry's memoir",
};

const secondBook = {
  title: "The Woman in Me",
  author: "Britney Spears ",
  img_src: "https://m.media-amazon.com/images/I/61BWsc9eGbL._SY466_.jpg",
  img_alt: "Britney Spears memoir",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img_src={firstBook.img_src}
        img_alt={firstBook.img_alt}
      >
        <p>Something lorem ipsum</p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img_src={secondBook.img_src}
        img_alt={secondBook.img_alt}
      />
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
