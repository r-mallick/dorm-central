import { 
  InputLabel, MenuItem, FormControl, Select, Box,
  List, ListItem, ListItemText, Grid, Typography, ListItemIcon
} from '@mui/material'
import {AcUnit, Shower, LocationCity, Person, Group, Groups, Weekend, 
  LocalLaundryService, SquareFoot, ConnectWithoutContact} from '@mui/icons-material';

import './Comparison.css';
import { React, useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDoc, doc, setDoc, getDocs, query, where} from "firebase/firestore";


const Comparison = () => {
  //value from BasicSelect, initialized w/ empty value
  const [dorm, setDorm] = useState("empty");
  const [dorm2, setDorm2] = useState("empty");
 
  //info from database
  const [types, setTypes] = useState([]);
  const [types2, setTypes2] = useState([]);
  const docRef =doc(db, "compare-info", dorm);
  const docRef2 =doc(db, "compare-info", dorm2);
  
  //updates types based on dorms value 
  useEffect(() => {
    const getTypes = async () => {
      const docSnap = await getDoc(docRef);
      setTypes(docSnap.data());
    };
    getTypes();
  }, [dorm]); //change makes useEffect to rerender
  
  useEffect(() => {
    const getTypes2 = async () => {
      const docSnap2 = await getDoc(docRef2);
      setTypes2(docSnap2.data());
    };
    getTypes2();
  }, [dorm2]); 




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
          
          <BasicSelect setDorm={setDorm}/>
  
          <DisplayCompare AC={types.AC} bathroom={types.Bathroom} location={types.Locations} 
          single={types.priceSingle} double={types.priceDouble} triple={types.priceTriple}
          lounge={types.Lounge} wash={types.Wash} size={types.Size} occupants={types.Occupants}/>

          </div>
        </div>
        <div class="rightDiv">
          Option 2
          <div class="centerDiv">
 
          <BasicSelect2 setDorm2={setDorm2}/>
  
          <DisplayCompare AC={types2.AC} bathroom={types2.Bathroom} location={types2.Locations} 
          single={types2.priceSingle} double={types2.priceDouble} triple={types2.priceTriple}
          lounge={types2.Lounge} wash={types2.Wash} size={types2.Size} occupants={types2.Occupants}/>

          </div>
        </div>   
     </div>
     </body> 
  ); 
}

export default Comparison;

function DisplayCompare({ AC, bathroom, location, single, double, triple, lounge, wash, size, occupants}){
  
  

  return (
    <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Key Features
    </Typography>
      <List >
          <ListItem>
            <ListItemIcon><AcUnit/></ListItemIcon>
            <ListItemText> {AC}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Shower/></ListItemIcon>
            <ListItemText>{bathroom}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Person/></ListItemIcon>
            <ListItemText>{single}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Group/></ListItemIcon>
            <ListItemText>{double}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Groups/></ListItemIcon>
            <ListItemText>{triple}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><LocationCity/></ListItemIcon>
            <ListItemText>{location}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><SquareFoot/></ListItemIcon>
            <ListItemText>{size}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Weekend/></ListItemIcon>
            <ListItemText>{lounge}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><LocalLaundryService/></ListItemIcon>
            <ListItemText>{wash}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><ConnectWithoutContact/></ListItemIcon>
            <ListItemText>{occupants}</ListItemText>
          </ListItem>
      </List>
  </Grid>
  )
}

function BasicSelect({ dorm, setDorm }) {
  const handleChange = (event) => {
    setDorm(event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dorm}
          onChange={handleChange}
        >
          <MenuItem value={'Classic'}>Classic</MenuItem>
          <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
          <MenuItem value={'Suite'}>Suite</MenuItem>
          <MenuItem value={'Plaza'}>Plaza</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicSelect2({ dorm2, setDorm2 }) {
  const handleChange = (event) => {
    setDorm2(event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dorm2}
          onChange={handleChange}
        >
          <MenuItem value={'Classic'}>Classic</MenuItem>
          <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
          <MenuItem value={'Suite'}>Suite</MenuItem>
          <MenuItem value={'Plaza'}>Plaza</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}

