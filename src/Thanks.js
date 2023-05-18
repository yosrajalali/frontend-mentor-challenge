import React from 'react';
import Container from './Container';
import Img from './images/illustration-thank-you.svg';

function Thanks({ index }) {
  return (
    <div>
      <Container>
        <div className="contents">
          <div className="img-container">
            <img src={Img} alt="" />
          </div>

          <p className="show-rating">{`You selected ${index} out of 5`}</p>

          <h1>Thank you!</h1>
          <div className="test">
            <p className="appreciate">
              We appreciate you taking the time to give a rating.If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Thanks;
