import '../CSS/websiteVisitors.css';
import React from 'react';

const Website_Visitors = (props) => {
  return (
    <div className='visitors'>
      <h3>Website Visitors</h3>
      {props.visitors}
    </div>
  );
};

export default Website_Visitors;
