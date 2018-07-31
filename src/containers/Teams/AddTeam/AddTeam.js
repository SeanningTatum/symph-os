import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';
import Select from 'react-select';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';


class AddTeam extends Component {
  state = {
    options: [],
    members: []
  };

  componentDidMount() {
    this.getOptions();
  }

  getOptions = () => {
    fetch("http://localhost:8080/_ah/api/employees-api/v1/getNames", {
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      },
    })
    .then(response =>  response.json())
    .then(options => {
      this.setState({options: options.employees});
    })
  }

  selectChangeHandler = (members) => {
    this.setState({members});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls, this.state.members);
    this.props.history.push('/teams');
  }

  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <React.Fragment>
        <Forms
          formElements={formElementsArray}
          clicked={this.onSubmit}
          controls={this.props.controls}
          controlName='teamControls'>
          
            <label>Team Members</label>
            <Select
              isMulti
              options={this.state.options}
              onChange={this.selectChangeHandler}
              className="basic-multi-select"
              classNamePrefix="select"/>
          <div style={{marginBottom: '1rem'}}>
          </div>

        </Forms>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.teamControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls, members) => dispatch(tableActions.add('teams', controls, 'teams-api', members)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);
