<<<<<<< HEAD
 
=======
import * as React from 'react';
import { Typography, Container, Box, Tabs, Tab,  Card, CardContent,  Grid, Stack, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {Link } from "react-router-dom";
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

//Review card prop
function ReviewCard(){
  return (
    <Grid sx={{ mx: 2 }}>
      <Card style = {{width: 800}} >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" align="center" paragraph>
          </Typography>
          <Typography variant="h5">
            Region reviewed, Number of stars, date of submission

          </Typography>
          <Typography component="p" paragraph style={{ marginTop: '20px'}}>
          When we have an arguement to recieve with a long string for the review text
          it will be displayed in this field. In the meantime I will be writing words 
          to fill up space, so that we will have an idea of the sizing. 
          </Typography>
          
        </CardContent>
      </Card>
    </Grid>
  );
}



//webpage
>>>>>>> origin
const ReviewsPage = () => {
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
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </Stack>
      </section>
    </body>
  );
}

export default ReviewsPage; 

