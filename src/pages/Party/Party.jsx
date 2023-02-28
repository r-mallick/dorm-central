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
  const[open,setOpen] = useState(-1);
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
      <TableContainer style={{ width: 1200 , margin: 'auto', border: "1px solid rgba(0,0,0,0.2)", padding: 4}} component={Paper}></TableContainer>
      <h2 class="hero1-title1" align="center">
              Party Submission Form
        </h2>
      <h1 class="hero1-title1"> </h1>
    <TableContainer style={{ width: 1200 , margin: 'auto', border: "1px solid rgba(0,0,0,0.2)", padding: 4}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location:
              <IconButton
                onClick = {() => setOpen(open === 1 ? -1 : 1)}
              >
              {open === 1 ? (
                <KeyboardArrowUpIcon/>
              ) : ( <KeyboardArrowDownIcon/>)
              }
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <Collapse in = {open === 1}>
              <TableContainer component={Paper}>
                <TableRow>
                  <TableCell align="left"> <Checkbox {...label} /> Olympic/Centenial </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> Sproul </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> De Neve </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> Sunset </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left"> <Checkbox {...label} /> Saxon </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> Rieber </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> Hedrick </TableCell>
                  <TableCell align="left"> <Checkbox {...label} /> Hitch </TableCell>
                </TableRow>
              </TableContainer>
            </Collapse>
          </TableRow>
          </TableHead>
          </Table>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow> 
            <TableCell>Maximum Occupancy </TableCell>
            <TableCell align="left">
              <TextField id="outlined-basic" label="Occupancy" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date/Time: </TableCell>
            <TableCell align="left">
              <TextField id="outlined-basic" label="Date" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Caption/Comments: </TableCell>
            <TableCell tyle={{ width: 1000 }}>
              <TextField id="fullWidth" label="Extra Deets" variant="outlined" />
            </TableCell>
          </TableRow>
          <TableRow align="center">
          <TableCell>Submit: </TableCell>
            <Button variant="contained" size="large"> Submit Party !</Button>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    </body> 
  );
}


export default Party;

