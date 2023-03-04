import { Rating, CardMedia, Button, Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material'
import { Link } from "react-router-dom";
import './Home.css';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
//Party Card component

function PartyCard({ date, location, caption, person, title, occupancy }) {
  return (
    <Grid sx={{ mx: 2 }}>
      <Card style = {{width: 250}}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" align="center" paragraph>
            { title }
          </Typography>
          <Typography component="p" paragraph>
            { caption }
          </Typography>
          <Typography component="p">
            Who: { person }
          </Typography>
          <Typography component="p">
            Where: { location }
          </Typography>
          <Typography component="p">
            When: { date }
          </Typography>
          <Typography component="p">
            Max Occupancy: { occupancy }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

//DormCard Component
function DormCard({ value, imgName }) {
  return (
    <Link to="/reviewsPage" style={{ textDecoration: 'none' }}>
      <Grid sx={{ m: 1 }}>
        <Card style = {{width: 300}}>
          <CardActionArea>
            <CardMedia
              component = "img"
              sx={{ height: 200 }}
              image={require('./Home-assets/' + imgName)}
            />
            <CardContent>
              <Typography variant='h6'>{value}</Typography>
              <Rating name="read-only" defaultValue={3} readOnly />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Link>
  )
}

//Home Page Setup
const Home = () => {
  
  const [parties, setParties] = useState([]);
  const partiesCollectionRef = collection(db, "parties");
  
  useEffect(() => {
    const getParties = async () => {
      const data = await getDocs(partiesCollectionRef);
      setParties(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getParties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = getDocs(partiesCollectionRef);
  console.log(data);

  return (
    <body class="body">
      <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
              DormCentral
        </h1>
        <h2 class="hero-subtitle">
              The one-stop site for anything dorm related.
        </h2>

        <Link to="/reviewSubmission" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ m: 1 }}>
          Submit a Review
        </Button>
        </Link>

        <Link to="/party" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ m: 1 }}>
          Post a Party
        </Button>
        </Link>

        <Link to="/comparison" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ m: 1 }}>
          Compare Dorms
        </Button>
        </Link>
        
      </div>
      </section>
      <section>
        <div>
          <h2 class="title">
            Here are some upcoming parties!
          </h2>
        </div>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
        {parties.map((party) => {
          return (
            <div>
              {" "}
              <PartyCard date={party.date} location={party.location} caption={party.caption} person={party.person} title={party.title} occupancy={party.occupancy}/>
            </div>
          )
        })}
        </Grid>
      </section>
      <section>
        <div>
          <h2 class="title">
            Select the region for which you want to see dorm reviews!
          </h2>
        </div>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
          <DormCard value={'Sunset Village'} imgName={'sunset-village.jpg'} />
          <DormCard value={'De Neve'} imgName={'de-neve.jpg'} />
          <DormCard value={'Hedrick'} imgName={'hedrick.jpg'} />
          <DormCard value={'Olympic/Centennial'} imgName={'olympic-centennial.jpg'} />
          <DormCard value={'Hitch'} imgName={'hitch-suites.jpg'} />
          <DormCard value={'Saxon'} imgName={'saxon-suites.jpg'} />
          <DormCard value={'Sproul'} imgName={'sproul.jpg'} />
          <DormCard value={'Rieber'} imgName={'rieber.jpg'} />

        </Grid>
      </section>
    </body>
  );
}

export default Home;