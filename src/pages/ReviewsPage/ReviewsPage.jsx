
import * as React from 'react';
import { Typography, Container, Box, Tabs, Tab,  Card, CardContent,  Grid, Stack, FormControl, InputLabel, MenuItem, Select, IconButton} from '@mui/material';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { db } from '../../firebase';
import { collection, updateDoc, doc, getDocs } from "firebase/firestore";
import './ReviewsPage.css'



//Tabs used for dorm selection
function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: "#f2f6fc" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Dorms" />
        <Tab label="Sunset Village" />
        <Tab label="De Neve" />
        <Tab label="Hedrick" />
        <Tab label="Olympic/Centennial" />
        <Tab label="Hitch" />
        <Tab label="Saxon" />
        <Tab label="Sproul" />
        <Tab label="Reiber" />
      </Tabs>
    </Box>
  );
}

//Dropdown menu for filtering
function BasicSelect() {
  const [Filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box >
      <FormControl sx={{ width: "70%", mx: '10%', bgcolor: "#f2f6fc" }} margin='dense'>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'classic'}>Classic</MenuItem>
          <MenuItem value={'deluxe'}>Deluxe</MenuItem>
          <MenuItem value={'suite'}>Suite</MenuItem>
          <MenuItem value={'plaza'}>Plaza</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}





//webpage
const ReviewsPage = () => {
  //data stuctures for holding database info
  const [reviews, setReviews] = React.useState([]);
  const reviewsCollectionRef = collection(db, "reviews");

  //querey database function
  React.useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getReviews();
  }, []);
  
  //update reviews (like/dislike)
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
    <body class="body"> 
      <section class="hero-rev">
        <div class="hero-rev-content">
          <h1 class="hero-rev-title">
            Reviews
          </h1>
          <h2 class="hero-rev-subtitle">
            Hear what other Bruins have to say about The Hill
          </h2>
          <Container maxWidth="false"  >
            <CenteredTabs></CenteredTabs>
            <BasicSelect></BasicSelect> 
          </Container>
        </div>
      </section>
      <section >
        <Stack xs={12} style={{ marginTop: '50px'}} spacing={5} direction="column"  alignItems="center" justifyContent="center">
          {reviews.map((Review) => {
            //Review card prop
            function ReviewCard({building, roomType, stars, review, likes, dislikes}){
              return (
                <Grid sx={{ mx: 2 }}>
                  <Card style = {{width: 800}} >
                    <CardContent>
                      <Typography variant="h5">
                        {building}, {roomType}, {stars}/5
                      </Typography>
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

