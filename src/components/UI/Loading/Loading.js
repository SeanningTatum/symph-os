import React from 'react'
import "./Loading.scss";

const Loading = () => (
  <div className="loading__container">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
)

export default Loading;
