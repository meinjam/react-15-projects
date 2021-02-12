import { useState } from 'react';

const Tour = ({ tours, removeTour }) => {
  const [readMore, setReadmore] = useState(true);

  const toggleReadMore = () => {
    setReadmore(!readMore);
  };

  return (
    <>
      {tours.map((tour) => (
        <article className='single-tour' key={tour.id}>
          <img src={tour.image} alt={tour.name} />
          <footer>
            <div className='tour-info'>
              <h4>{tour.name}</h4>
              <h4 className='tour-price'>{tour.price}</h4>
            </div>
            <p>
              {readMore ? `${tour.info.substring(0, 200)}...` : tour.info}
              <button onClick={toggleReadMore}>
                {readMore ? '(read more)' : '(show less)'}
              </button>
            </p>
            <button className='delete-btn' onClick={() => removeTour(tour.id)}>
              not interested
            </button>
          </footer>
        </article>
      ))}
    </>
  );
};

export default Tour;
