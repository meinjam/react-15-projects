import List from './List';
import data from './data';
import { useState } from 'react';

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3> {people.length} Birthday Today</h3>
        <List people={people} />
        <button onClick={handleClick}>Clear all</button>
      </section>
    </main>
  );
};

export default App;
