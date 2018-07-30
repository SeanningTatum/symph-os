import React from 'react'
import './Card.scss';

const Card = () => (
  <div className="card" style={{textAlign: 'center'}}>
    <div className="card-header">
      Team Firebaes
    </div>
    <div className="card-body">
      <h5 className="card-title"><strong>Project Manager: Joshua Ty</strong></h5>
      <h5 className="card-text">Team Leader: Vince Villahermosa</h5>
      <button className="btn btn-primary" style={{alignSelf: 'center'}}>View Projects</button>
    </div>
    <div className="card-footer text-muted">
      Members
    </div>
  </div>
)

export default Card
