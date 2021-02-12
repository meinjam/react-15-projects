import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    console.log(id);
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button onClick={fetchData} className='btn'>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
