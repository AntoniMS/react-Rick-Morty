export default function Gallery({ list }) {
  return (
    <div className="container">
      {list.map((item) => (
        <figure key={item.id} className="char">
          <figcaption>{item.name}</figcaption>

          <img src={item.image} alt={item.name} />
          <p>Status: {item.status}</p>
        </figure>
      ))}
    </div>
  );
}
