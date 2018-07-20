import React from 'react';
import './Sidenav.css';

import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';

const Sidenav = (props) => {

  const width = props.open ? '200px' : '55px';
  const padding = props.open ? '60px 20px 20px 20px' : '60px 0 0 0';

  return (
    <div className="sidenav" style={{height: '100%', width, padding}}>
      <ul className="list-group list-group-flush">
        <NavigationItems open={props.open} />
      </ul>
    </div>
  )

}

export default Sidenav;
