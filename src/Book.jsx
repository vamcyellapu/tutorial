const Book = ({ img, title, author }) => {
  const clickHandler = () => {};
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        add
      </button>
    </article>
  );
};

export default Book;
