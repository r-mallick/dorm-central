/*
const ReviewsPage = () => {
  return (
    <div>
      This is the reviews page
    </div>
  );
}

*/
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import React, { useState } from 'react';
import './RatingBox.css';

function RatingBox() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}`);
    console.log(`Comment: ${comment}`);
  };

  return (
    <div className="rating-box">
      <form onSubmit={handleSubmit}>
        <div className="rating-inputs">
          <label>
            <input type="radio" name="rating" value="1" onChange={handleRatingChange} />
            <span className="icon">&#9733;</span>
          </label>
          <label>
            <input type="radio" name="rating" value="2" onChange={handleRatingChange} />
            <span className="icon">&#9733;</span>
          </label>
          <label>
            <input type="radio" name="rating" value="3" onChange={handleRatingChange} />
            <span className="icon">&#9733;</span>
          </label>
          <label>
            <input type="radio" name="rating" value="4" onChange={handleRatingChange} />
            <span className="icon">&#9733;</span>
          </label>
          <label>
            <input type="radio" name="rating" value="5" onChange={handleRatingChange} />
            <span className="icon">&#9733;</span>
          </label>
        </div>
        <textarea className="comment-input" placeholder="Write your review here..." onChange={handleCommentChange}></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default RatingBox;
