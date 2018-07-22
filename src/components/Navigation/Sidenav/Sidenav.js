import React from 'react';
import './Sidenav.scss';
import PropTypes from 'prop-types';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';

const Sidenav = (props) => {

  const width = props.open ? '200px' : '55px';
  const padding = props.open ? '70px 20px 20px 20px' : '60px 0 0 0';

  return (
    <div className="sidenav" style={{height: '100%', width, padding}}>
      <ul className="sidenav--list">
        <NavigationItems open={props.open} />
      </ul>
    </div>
  )

}

Sidenav.propTypes = {
  open: PropTypes.bool.isRequired
}

export default Sidenav;
