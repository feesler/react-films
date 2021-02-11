import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/Star.jsx';

const MIN_STARS = 1;
const MAX_STARS = 5;

function Stars(props) {
  const { count } = props;

  if (
    typeof count !== 'number'
    || count < MIN_STARS
    || count > MAX_STARS
  ) {
    return null;
  }

  const stars = [];
  stars.length = count;
  stars.fill(<Star />);

  return (
    <ul className="card-body-stars">
      {stars.map((star, index) => (
        <li key={`s_${index}`} children={star} />
      ))}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stars;

