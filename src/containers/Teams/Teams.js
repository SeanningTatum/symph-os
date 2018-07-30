import React, { Component } from 'react';
import Card from 'components/Card/Card';

class Teams extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
  render() {
    return (
      <div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {[1,2,3,4].map(num => (
          <Card key={num} />
        ))}
      </div>
    )
  }
}

export default Teams;