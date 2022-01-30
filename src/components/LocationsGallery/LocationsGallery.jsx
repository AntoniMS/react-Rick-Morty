
export default function LocationsGallery({ list }) {
    return (
      <div className="container">
          
        {list.map((item) => (
          
          <figure key={item.id} className="char">
            <figcaption>{item.name}</figcaption>
            <img src="https://res.cloudinary.com/dumrd1tos/image/upload/c_fill,h_500,w_500/v1643457055/samples/location_brdy5k.png" alt={item.name} />
            <figcaption>{item.type}</figcaption>
  
            
          </figure>
        ))}
      </div>
    );
  }
  


