const Book = (props) => {
  const { author, title, img_src, img_alt } = props;

  return (
    <article className="book">
      <img src={img_src} alt={img_alt} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
