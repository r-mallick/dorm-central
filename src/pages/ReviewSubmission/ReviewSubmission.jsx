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
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 


import React, { useState } from 'react';
import './RatingBox.css';
 

function RatingBox() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [value, setValue] = useState();
  const [selectedValue, setSelectedValue] = useState('');
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}`);
    console.log(`Comment: ${comment}`);
    console.log(`Selected Location: ${selectedValue}`);
  };

  function handleChange(event) {
    setValue(event.target.value); 
    setSelectedValue(event.target.value);
  }
    



  return (
    <div className="rating-box">
      <form onSubmit={handleSubmit}>
        <div className="rating-inputs"> 
        <Typography className="submit" component="legend">Review</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <FormControl fullWidth size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="form-control label" id="demo-simple-select-label">Location</InputLabel>
        <Select
         //  sx={{ width: '150px' }}
          className = "form-control select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Location"
          value={selectedValue}
          onChange={handleLocationChange}
        > 
          <MenuItem value="Sunset Village">Sunset Village</MenuItem>
          <MenuItem value="De Neve">De Neve</MenuItem>
          <MenuItem value="Hedrick">Hedrick</MenuItem>
          <MenuItem value="Olymic/Centennial">Olympic/Centennial</MenuItem>
          <MenuItem value="Hitch">Hitch</MenuItem>
          <MenuItem value="Saxon">Saxon</MenuItem>
          <MenuItem value="Sproul">Sproul</MenuItem>
          <MenuItem value="Rieber">Rieber</MenuItem>
          
        </Select>
      </FormControl>
     
      <FormControl fullWidth size="small" sx={{ m: 1 }}>
        <InputLabel className="form-control label" id="demo-simple-select-label">Room Type</InputLabel>
        <Select
          sx={{ width: '150px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Room Type"
          value={selectedValue}
          onChange={handleRoomChange}
        > 
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Double">Double</MenuItem>
          <MenuItem value="Triple">Triple</MenuItem>
          <MenuItem value="Suite">Suite</MenuItem>
          <MenuItem value="Deluxe Double">Deluxe Double</MenuItem>
          <MenuItem value="Deluxe Triple">Deluxe Triple</MenuItem>
          
        </Select>
      </FormControl>
     
        </div>
        <textarea className="comment-input" placeholder="Write your review here..." onChange={handleCommentChange}></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}


export default RatingBox;
