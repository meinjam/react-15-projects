import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <Tour tours={tours} removeTour={removeTour} />
    </section>
  );
};

export default Tours;
