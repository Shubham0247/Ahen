import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating); // Round to the nearest whole star

  return (
    <span className="star-rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < filledStars ? 'filled' : ''}`}
          style={{
            color: index < filledStars ? 'gold' : 'transparent',
            textShadow: index < filledStars ? '0 0 2px black' : 'none',
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
