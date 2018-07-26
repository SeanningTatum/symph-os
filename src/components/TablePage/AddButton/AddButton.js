import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddButton = ({entity}) => (
  <div className="button-area">
    <Link to={`/${entity}s/add-${entity}`}>
      <button className="btn">
        <i className="material-icons">person_add</i>
        Add {entity.charAt(0).toUpperCase() + entity.substr(1)}
        </button>
    </Link>
  </div>
)

AddButton.propTypes = {
  entity: PropTypes.string.isRequired
}

export default AddButton
