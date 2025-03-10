
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Rating, Typography, Container, Box, Tabs, Tab,  Card, CardContent,  Grid, Stack, FormControl, InputLabel, MenuItem, Select, IconButton} from '@mui/material';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import { db } from '../../firebase';
import { collection, updateDoc, doc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import './ReviewsPage.css'
import { useLocation } from "react-router-dom";


//webpage
const ReviewsPage = (props) => {
  //for retrieving which dorm region was selected from the home page
  const location = useLocation();
  const data = location.state?.data;
  const dormRegion = data.value.toString();

  //data stuctures for holding database info
  const [reviews, setReviews] = React.useState([]);
  const reviewsCollectionRef = collection(db, "reviews");

  const [value, setValue] = React.useState(dormRegion);

  //This is for dorm region selection
  const [region, setRegion] = React.useState(dormRegion);

  //This is for room type selection
  const [roomType, setRoomType] = React.useState("all");
  
  //handleChange functions for both filters
  const handleRegionChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Filter, setFilter] = React.useState('');
  
  const handleRoomTypeChange = (event) => {
    setFilter(event.target.value);
    setRoomType(event.target.value);
  };

  //querey database function
  React.useEffect(() => {

    const getReviews = async () => {
      let q = reviewsCollectionRef
      if (region == "all" && roomType == "all") {
        q = reviewsCollectionRef
      }
      else if (region == "all") {
        q = query(reviewsCollectionRef, where("roomType", "==", roomType))
      }
      else if (roomType == "all") {
        q = query(reviewsCollectionRef, where("building", "==", region))
      }
      else {
        q = query(reviewsCollectionRef, where("building", "==", region), where("roomType", "==", roomType));
      }
      
      //const data = await getDocs(reviewsCollectionRef);
      onSnapshot(q, (snapshot) => 
        setReviews(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      )
    };

    getReviews();

  }, [region]);
  
  return (
    <body class="body"> 
      <section class="hero1">
        <div class="hero1-content">
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-start'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <IconButton className="home-button1" edge="start" color="inherit" aria-label="home" sx={{mr: 2}}>
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
          <h1 class="hero1-title">
            Reviews
          </h1>
          <h2 class="hero1-subtitle">
            Hear what other Bruins have to say about The Hill
          </h2>
          <Container maxWidth="false"  >
          <Box>
            <FormControl sx={{ width: "70%", mx: '10%', bgcolor: "#f2f6fc" }} margin='dense'>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Filter}
                label="Filter"
                onChange={handleRoomTypeChange}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'Classic'}>Classic</MenuItem>
                <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
                <MenuItem value={'Suite'}>Suite</MenuItem>
                <MenuItem value={'Plaza'}>Plaza</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: '100%', bgcolor: "#f2f6fc" }}>
            <Tabs value={value} onChange={handleRegionChange} centered>
              <Tab label="All Dorms" value="all" onClick = {() => {setRegion("all")}}/>
              <Tab label="Sunset Village" value="Sunset Village" onClick = {() => {setRegion("Sunset Village")}}/>
              <Tab label="De Neve" value="De Neve" onClick = {() => {setRegion("De Neve")}}/>
              <Tab label="Hedrick" value="Hedrick" onClick = {() => {setRegion("Hedrick")}}/>
              <Tab label="Olympic/Centennial" value="Olympic/Centennial" onClick = {() => {setRegion("Olympic/Centennial")}}/>
              <Tab label="Hitch" value="Hitch" onClick = {() => {setRegion("Hitch")}}/>
              <Tab label="Saxon" value="Saxon" onClick = {() => {setRegion("Saxon")}}/>
              <Tab label="Sproul" value = "Sproul" onClick = {() => {setRegion("Sproul")}}/>
              <Tab label="Rieber" value="Rieber" onClick = {() => {setRegion("Rieber")}}/>
            </Tabs>
          </Box>
          </Container>
        </div>
      </section>
      <section>
        <Stack xs={12} style={{ marginTop: '50px'}} spacing={5} direction="column"  alignItems="center" justifyContent="center">
          {reviews.map((Review) => {
            //Review card prop

            function ReviewCard({building, roomType, stars, review, likes, dislikes}){
              
              const incrementLike= async (id, rating, direction) => {

                if(direction == "up")
                {
                  const userDoc = doc(db, "reviews", id);
                  const newFields = {likes: rating + 1};
                  await updateDoc(userDoc, newFields);
            
                }
                else if( direction == "down")
                {
                  const userDoc = doc(db, "reviews", id);
                  const newFields = {dislikes: rating + 1};
                  await updateDoc(userDoc, newFields);
                }
            
              };


              return (
                <Grid sx={{ mx: 2 }}>
                  <Card style = {{width: 800}} class="review-card" >
                    <CardContent>
                      <Typography variant="h5">{building}</Typography>
                      <Typography variant='h6'>{roomType}</Typography>
                      <Rating name="read-only" value={stars} readOnly/>

                      <Typography component="p" paragraph style={{ marginTop: '20px'}}>
                        {review}
                      </Typography>
                    </CardContent>
                    <Stack direction='row' spacing={2} justifyContent="left">
                      <IconButton onClick={() => {incrementLike(Review.id, Review.likes, "up")}}>
                        <ThumbUpOutlinedIcon />
                        <Typography variant='h6'>{likes}</Typography>
                      </IconButton>
                      <IconButton onClick={() => {incrementLike(Review.id, Review.dislikes, "down")}}>
                        <ThumbDownOutlinedIcon />
                        <Typography variant='h6'>{dislikes}</Typography>
                      </IconButton>
                    </Stack>
                  </Card>
                </Grid>
              );
            }
            return (
              <div>
                {" "}
                <ReviewCard building={Review.building} roomType={Review.roomType} stars={Review.stars} review={Review.review} likes={Review.likes} dislikes={Review.dislikes}>
              
                </ReviewCard> 
                
              </div>
            )
          })}
        </Stack>
      </section>
    </body>
  );
}

export default ReviewsPage; 

