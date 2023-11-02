const Book = (props) => {
  const { author, title, img_src, img_alt, number } = props;

  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={img_src} alt={img_alt} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
