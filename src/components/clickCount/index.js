function clickCount({ count, name }) {
  return (
    <div className="d-flex justify-content-end col">
      <p className="clickCount m-1 text-center">
        {name}: <span>{count}</span>
      </p>
    </div>
  );
}

export default clickCount;
