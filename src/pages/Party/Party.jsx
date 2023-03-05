import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState} from 'react';
import { Collapse } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import './Party.css';



const Party = () => {
  const[open,setOpen] = useState(1);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <body class="body">
      <section class="hero1">
      <div class="hero1-content">
        <h1 class="hero1-title">
              PartyCentral
        </h1>
        <h2 class="hero1-subtitle">
              Submit all your crazy 'responsible' parties here!!
        </h2>
      </div>
      </section>
      <TableContainer style={{ width: 1200 , margin: 'auto', border: "1px solid rgba(0,0,0,0.2)", padding: 4}} class="rating-box" component={Paper}></TableContainer>
      <h2 class="hero1-title1" align="center">
              Party Submission Form
        </h2>
      <h1 class="hero1-title1"> </h1>
    <TableContainer class="rating-box" style={{ width: 950 , margin: 'auto', border: "1px solid rgba(0,0,0,0.2)", padding: 4}} component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Location 
              <IconButton
                onClick = {() => setOpen(open === 1 ? -1 : 1)}
              >
              {open === 1 ? (
                <KeyboardArrowUpIcon/>
              ) : ( <KeyboardArrowDownIcon/>)
              }
              </IconButton>
            </TableCell>
            <TableCell>
            <Collapse in = {open === 1}>
                <TableRow >
                  <TableCell align="center"> <Checkbox {...label} /> Sproul </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> De Neve </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> Sunset </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> Saxon </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> <Checkbox {...label} /> Hedrick </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> Olympic/Centenial </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> Hitch </TableCell>
                  <TableCell align="center"> <Checkbox {...label} /> Rieber </TableCell>
                </TableRow>
            </Collapse>
            </TableCell>
          </TableRow>
          </TableHead>
          </Table>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
          <TableRow> 
            <TableCell>Party Name </TableCell>
            <TableCell  align="left">
              <TextField sx={{width: 300}} placeholder="Something Fun" id="outlined-basic" label="Party Name" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow> 
            <TableCell>Maximum Occupancy </TableCell>
            <TableCell align="left">
              <TextField sx={{width: 300}} placeholder="Integer Value" id="outlined-basic" label="Occupancy" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date/Time: </TableCell>
            <TableCell align="left" >
              <TextField sx={{width: 300}} placeholder="month / day / year" id="outlined-basic" label="Date" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Caption/Comments: </TableCell>
            <TableCell  align="left" tyle={{ width: 1000 }}>
              <TextField sx={{width: 600}} InputProps={{ sx: { height: 120 } }} placeholder="Be Appropriate !" multiline maxRows={4} id="fullWidth" label="Extra Deets" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell align="center">
            <Button variant="contained" size="large"> Submit Party !</Button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    </body> 
  );
}


export default Party;

