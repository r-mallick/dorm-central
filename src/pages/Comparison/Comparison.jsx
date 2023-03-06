import { 
  InputLabel, MenuItem, FormControl, Select, Box,
  List, ListItem, ListItemText, Grid, Typography, ListItemIcon
} from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Comparison.css';
import { React, useState } from 'react';



function DisplayCompare(){
  return (
    <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Key Features
    </Typography>
      <List >
          <ListItem>
            <ListItemIcon>
            <AcUnitIcon/>
            </ListItemIcon>
            <ListItemText
              primary="AC"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShowerIcon/>
            </ListItemIcon>
            <ListItemText
              primary="Bathroom"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AttachMoneyIcon/>
            </ListItemIcon>
            <ListItemText
              primary="Price"
            />
          </ListItem>
      </List>
  </Grid>
  )
}
function BasicSelect() {
  // const [dorm, setDorm] = React.useState('');

  // const handleChange = (event) => {
  //   setDorm(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={dorm}
          label="Dorm"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Classic</MenuItem>
          <MenuItem value={20}>Deluxe</MenuItem>
          <MenuItem value={30}>Suite</MenuItem>
          <MenuItem value={40}>Plaza</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
const Comparison = () => {
 
  return (
    <body class="body">
      <section class="hero1">
      <div class="hero1-content">
        <h1 class="hero1-title">
              Compare Dorms
        </h1>
        <h2 class="hero1-subtitle">
              View dorm features side by side
        </h2>
      </div>
      </section>
    <div >
      <h1 class="topDiv">
      Select Dorm Types

      </h1>
      
        <div class="leftDiv"> 
        Option 1
        <div class="centerDiv">
          <BasicSelect></BasicSelect>
          <DisplayCompare></DisplayCompare>
          </div>
        </div>
        <div class="rightDiv">
          Option 2
          <div class="centerDiv">
          <BasicSelect></BasicSelect>
          <DisplayCompare></DisplayCompare>
          </div>
          

        </div>
       
     </div>
     </body>

    
  );
}

export default Comparison;



