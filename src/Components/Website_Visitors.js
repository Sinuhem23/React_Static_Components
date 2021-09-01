import '../CSS/websiteVisitors.css';
import React from 'react';

const Website_Visitors = (props) => {
  return (
    <div className='visitors'>
      <h3 className='visitor_text'>
        Website Visitors
        <p className='visitor_count'> {props.visitors}</p>
      </h3>
      <div className='graph'></div>
    </div>
  );
};

export default Website_Visitors;
