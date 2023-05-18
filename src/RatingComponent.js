import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Container from './Container';

function RatingComponent({ onSubmit }) {
  const [index, setIndex] = useState(0);
  const [num, setNum] = useState([1, 2, 3, 4, 5]);
  const [active, setActive] = useState(false);

  const handleClick = (ratingScore) => {
    setIndex(ratingScore);
  };

  return (
    <div>
      <Container>
        <div className="icon-container">
          <AiFillStar className="icon" />
        </div>
        <div className="content">
          <h3> How did we do ? </h3>
          <p>
            Please let us know how we did with your support request.All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rating-scores">
          {[...Array(5)].map((rating, i) => {
            const ratingScore = i + 1;
            return (
              <div className="rating-score" key={i}>
                <h4
                  onClick={() => {
                    handleClick(ratingScore);
                  }}
                  className={`rating-score ${
                    index === num[i] ? 'primary' : 'default'
                  }`}
                >
                  {ratingScore}
                </h4>
              </div>
            );
          })}
        </div>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            onSubmit(index);
          }}
        >
          SUBMIT
        </button>
      </Container>
    </div>
  );
}

export default RatingComponent;
