import '../CSS/sentiment.css';

const Sentiment_Analysis = (props) => {
  return (
    <div className='sentiment'>
      <h3>Sentiment Analysis</h3>
      <p> {props.sentiment1} </p>
      <p> {props.sentiment2} </p>
      <p> {props.sentiment3} </p>
    </div>
  );
};

export default Sentiment_Analysis;
