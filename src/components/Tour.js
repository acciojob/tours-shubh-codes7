import React from "react";

const Tour = ({ tour, tours, setTours }) => {
  const { id, name, info, image, price } = tour;
  const [showMore, setShowMore] = React.useState(false);

  function toggleText() {
    setShowMore((prev) => !prev);
  }

  function handleRemoveTour() {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  }

  return (
    <div className="single-tour">
      <h1>{name}</h1>
      <img src={image} />
      <div>
        <p
          className="tour-info"
          id={`tour-item-para-${id}`}  // ✅ Add this for test 2
        >
          {showMore ? info : info.slice(0, 200)+ "..."}
        </p>
        <button id={`see-more-${id}`} onClick={toggleText}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <p className="tour-price">
        <strong>Price: </strong>
        {price}
      </p>
      <button
        className="delete-btn"
        id={`delete-btn-${id}`} // ✅ Add this for test 1
        onClick={handleRemoveTour}
      >
        Remove
      </button>
    </div>
  );
};

export default Tour;
