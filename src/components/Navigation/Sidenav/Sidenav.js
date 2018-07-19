import React from 'react';
import './Sidenav.css';

const Sidenav = (props) => {

  const width = props.open ? '250px' : 0;

  return (
    <div className="sidenav" style={{height: '100%', width}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  )

}

export default Sidenav;
