import './App.css';
import Button from '@mui/material/Button';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Comparison from './pages/Comparison/Comparison';
import Party from './pages/Party/Party';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import ReviewSubmission from './pages/ReviewSubmission/ReviewSubmission';

function App() {
  return (
    // <div>
    //   <Button variant="contained">Example Material UI button</Button>
    //   This is Dorm Central
    // </div>
    
    <Routes>
        <Route index element={<Home />} />
        <Route path='comparison' element={<Comparison />} />
        <Route path='reviewsPage' element={<ReviewsPage />} />
        <Route path='reviewSubmission' element={<ReviewSubmission />} />
        <Route path='party' element={<Party />} />

    </Routes>
  
  );
}

export default App;
