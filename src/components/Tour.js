import React from "react";

const Tour = ({tour, tours, setTours}) => {
    const {id, name, info, image, price} = tour
    const [showMore, setShowMore] = React.useState(false);

    function toggleText(){
      setShowMore(prev => !prev)
    }

    function handleRemoveTour(){
      tours = tours.filter(tour => tour.id !== id)
      setTours(tours)
    }

    // const shortenedText = info.split(' ').slice(0, 20).join(' ')+"..."

    return(
      <div className="single-tour">
        <h1>{name}</h1>
        <img src={image} />
        <div>
          <p className="tour-info">{showMore ? info : info.slice(0, 200)+"..."}</p>
          <button onClick={toggleText}>{showMore ? 'Show Less' : 'Show More'}</button>
        </div>
        <p className="tour-price"><strong>Price: </strong>{price}</p>
        <button className="delete-btn" onClick={handleRemoveTour}>Remove</button>
      </div>
    )
}
export default Tour;