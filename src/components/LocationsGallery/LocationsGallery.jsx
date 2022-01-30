
export default function LocationsGallery({ list }) {
    return (
      <div className="container">
          
        {list.map((item) => (
          
          <figure key={item.id} className="char">
            <figcaption>{item.type}</figcaption>
            <img src="https://res.cloudinary.com/dumrd1tos/image/upload/v1643457055/samples/location_brdy5k.png" alt={item.name} />
  
            <figcaption>{item.name}</figcaption>
            <figcaption>{item.dimension}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  


