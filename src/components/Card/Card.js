import React from 'react'
import './Card.scss';

const Card = () => (
  <div class="card" style={{textAlign: 'center'}}>
    <div class="card-header">
      Team Firebaes
    </div>
    <div class="card-body">
      <h5 class="card-title"><strong>Project Manager: Joshua Ty</strong></h5>
      <h5 class="card-text">Team Leader: Vince Villahermosa</h5>
      <button className="btn btn-primary">View Projects</button>
    </div>
    <div class="card-footer text-muted">
      Members
    </div>
  </div>
)

export default Card
