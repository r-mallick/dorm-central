import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 
import Container from '@mui/material/Container'; 
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { db } from '../../firebase'
import './RatingBox.css';
import { collection, addDoc } from 'firebase/firestore';

const Header = styled(AppBar)({
  backgroundColor: '#923939ce',
  padding: '50px',
});

function RatingBox() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [room, setRoom] = useState();
  const [location, setLocation] = useState('');
  const reviewsCollectionRef = collection(db, "reviews")
  

  const getReview = async () => {
    const ratingNum = Number(rating);
    await addDoc(reviewsCollectionRef, {building: location, review: comment, roomType: room, number: ratingNum, likes: 0, dislikes: 0})
    }
  


  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}`);
    console.log(`Comment: ${comment}`);
    console.log(`Selected Location: ${location}`);
 
  };
 


  return (
    <div>
        <section class="hero-rev">
        <div class="hero-rev-content">
          <h1 class="hero-rev-title">
            Submit a Review
          </h1>
          <h2 class="hero-rev-subtitle">
            Rate the Hill!
          </h2>
          <Container maxWidth="false"> 
          </Container>
        </div>
      </section>
    <div className="rating-box">
      <form onSubmit={handleSubmit}>
        <div className="rating-inputs"> 
        <Typography className="submit" component="legend">Review</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={handleRatingChange} />
        
        
        <FormControl fullWidth size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="form-control label" id="demo-simple-select-label">Location</InputLabel>
        <Select
         //  sx={{ width: '150px' }}
          className = "form-control select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Location"
          value={location}
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
          value={room}
          onChange={handleRoomChange}
        > 
          <MenuItem value="Classic">Classic</MenuItem>
          <MenuItem value="Deluxe">Deluxe</MenuItem>
          <MenuItem value="Suite">Suite</MenuItem>
          <MenuItem value="Plaza">Plaza</MenuItem>
        </Select>
      </FormControl>
     
        </div>
        <textarea className="comment-input" placeholder="Write your review here..." onChange={handleCommentChange}></textarea>
        <Link to="/Home" style={{ textDecoration: 'none' }}>
        <button onClick={getReview} type="submit" className="submit-button">Submit</button>
        </Link>
      </form>
    </div>
    </div> 
  );
}


export default RatingBox;
