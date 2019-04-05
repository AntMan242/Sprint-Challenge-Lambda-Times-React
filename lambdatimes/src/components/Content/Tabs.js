import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div className='tabs-wrapper'>
          {props.tabs.map(t => (
            <Tab tab={t} />
            ))}
        </div>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propType = {
  tabs: propTypes.array
};


export default Tabs;
