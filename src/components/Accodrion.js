function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    const { id, label, content } = item;
    return (
      <div key={id}>
        <div>{label}</div>
        <div>{content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
