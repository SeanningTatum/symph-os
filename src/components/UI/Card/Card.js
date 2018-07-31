import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({leader, name, project_manager, slack}) => (
  <div className="card" style={{textAlign: 'center'}}>
    <div className="card-header">
      {name}
    </div>
    <div className="card-body">
      <h5 className="card-title"><strong>Project Manager: {project_manager}</strong></h5>
      <h5 className="card-text">Team Leader: {leader}</h5>
      <h5 className="card-text">Slack: {slack}</h5>
      <button className="btn btn-primary" style={{alignSelf: 'center'}}>View Projects</button>
    </div>
    <div className="card-footer text-muted">
      Members
    </div>
  </div>
)

Card.propTypes = {
  leader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  project_manager: PropTypes.string.isRequired,
  slack: PropTypes.string.isRequired,
}

export default Card
