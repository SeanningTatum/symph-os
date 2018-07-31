import React, { Component } from 'react';
import AddButton from 'components/TablePage/AddButton/AddButton';
import Card from 'components/UI/Card/Card';


class Teams extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentDidMount() {
    const options = {
      headers: {
        "Content-Type": "application/json",        
        "Authorization": 'Bearer ' + localStorage.getItem('token')
    }
  }
    fetch('http://localhost:8080/_ah/api/teams-api/v1/get', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }
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
      <React.Fragment>
        <AddButton entity="team"/>
        <div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {[1,2,3,4].map(num => (
            <Card key={num} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Teams;