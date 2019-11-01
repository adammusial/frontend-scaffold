import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.css';
import randomImage from './random-image.jpg';

function Greeting({ name }) {
  return (
    <div className="Greeting">
      <img src={randomImage} alt="Random landscape" />
      {`Hello ${name}!`}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
