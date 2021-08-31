import './App.css';
import Nav from './Components/Nav';
import Ratings from './Components/Ratings';
import AvgRatings from './Components/AvgRatings';
import Sentiment_Analysis from './Components/Sentiment_Analysis';
import Website_Visitors from './Components/Website_Visitors';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='topRow'>
        <Ratings rating='1,281' />
        <AvgRatings AvgRating='4.6' />
        <Sentiment_Analysis
          sentiment1='960'
          sentiment2='112'
          sentiment3='321'
        />
      </div>
      <div className='bottomRow'>
        {' '}
        <Website_Visitors visitors='821' />
      </div>
    </div>
  );
}

export default App;
