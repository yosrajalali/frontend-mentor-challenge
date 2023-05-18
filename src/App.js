import React, { useState } from 'react';
import Container from './Container';

import RatingComponent from './RatingComponent';
import Thanks from './Thanks';

function App() {
  const [index, setIndex] = useState(0);
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (index) => {
    setIndex(index);
    setSubmited(true);
  };

  return (
    <section>
      {submited ? (
        <Thanks index={index} />
      ) : (
        <RatingComponent onSubmit={handleSubmit} />
      )}
    </section>
  );
}

export default App;
