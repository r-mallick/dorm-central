import { Rating, CardMedia, Button, Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material'

import './Home.css';

//Party Card component
function PartyCard({ title }) {
  return (
    <Grid sx={{ mx: 2 }}>
      <Card style = {{width: 250}}>
        <CardContent>
        <Typography variant="h6" fontWeight="bold" align="center" paragraph>
            { title }
          </Typography>
          <Typography component="p" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography component="p">
            Who:
          </Typography>
          <Typography component="p">
            Where:
          </Typography>
          <Typography component="p">
            When:
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

//DormCard Component
function DormCard({ value, imgName }) {
  return (
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
  )
}

//Home Page Setup
const Home = () => {
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
        <Button variant="contained" sx={{ m: 1 }}>
          Submit a Review
        </Button>
        <Button variant="contained" sx={{ m: 1 }}>
          Post a Party
        </Button>
        <Button variant="contained" sx={{ m: 1 }}>
          Compare Dorms
        </Button>
      </div>
      </section>
      <section>
        <div>
          <h2 class="title">
            Here are some upcoming parties!
          </h2>
        </div>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
          <PartyCard title={'party1'} caption={'caption1'}/>
          <PartyCard title={'party2'} caption={'caption2'}/>
          <PartyCard title={'party3'} caption={'caption3'}/>
          <PartyCard title={'party4'} caption={'caption4'}/>
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