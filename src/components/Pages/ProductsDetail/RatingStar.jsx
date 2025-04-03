
import React, { useState, useEffect } from 'react';

// Custom RatingStar component
const RatingStar = ({ rating, onRatingChange, maxRating = 5 }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  // Effect to update the state if the parent passes a new rating
  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  // Function to handle rating change
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
    if (onRatingChange) onRatingChange(newRating); // Call the parent callback to update the rating in the parent
  };

  // Function to set the color of the stars dynamically
  const getStarColor = (starIndex) => {
    if (starIndex <= currentRating) return 'text-yellow-500'; // Filled star color
    return 'text-gray-300'; // Empty star color
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer text-2xl ${getStarColor(index + 1)}`}
          onClick={() => handleRatingChange(index + 1)}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-lg font-semibold">{currentRating}/{maxRating}</span>
    </div>
  );
};

export default RatingStar;
