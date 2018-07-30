import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

class AddProject extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.history.push('/projects');
  }

  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <Forms
        formElements={formElementsArray}
        clicked={this.onSubmit}
        controls={this.props.controls}
        controlName='projectControls' />
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.projectControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls) => dispatch(tableActions.add('projects', controls, 'projects-api')),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
