import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';
import Select from 'react-select';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

const selectForms = [
  {option: 'projectManagerOptions', label: 'Project Manager', isMulti: false},
  {option: 'teamleaderOptions', label: 'Leader', isMulti: false},
  {option: 'memberOptions', label: 'Members', isMulti: true},
];

class AddTeam extends Component {
  state = {
    projectManagerOptions: [],
    teamleaderOptions: [],
    memberOptions: [],
    
    values: {
      members: [],
      leader: '',
      project_manager: '',
    },

    selectValid: false
  };

  componentDidMount() {
    this.getOptions();
    this.setState({selectValid: this.areSelectsValid()});
  }

  componentDidUpdate(_, prevState) {
    if (this.state.values !== prevState.values) {
      this.setState({selectValid: this.areSelectsValid()});
      console.log(this.state.selectValid)
    }
  }

  areSelectsValid = () => {
    const values = this.state.values;
    return (
      values.members.length !== 0 &&
      values.team_leader !== '' &&
      values.project_manager !== ''
    );
  }

  getOptions = () => {

    const options = {
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      },
    }

    fetch("http://localhost:8080/_ah/api/employees-api/v1/getNames", options)
      .then(response =>  response.json())
      .then(options => {
        this.setState({memberOptions: options.employees, teamleaderOptions: options.employees});
      });

    fetch("http://localhost:8080/_ah/api/employees-api/v1/getProjectManagers", options)
      .then(response =>  response.json())
      .then(options => {
        this.setState({projectManagerOptions: options.employees});
      });
  }

  selectChangeHandler = (valueObj, name) => {
    const valueName = name.replace(/\s+/, "_").toLowerCase();
    const newValues = {...this.state.values};
  
    for (const key in valueObj) {
      if (valueName === 'members') {
        newValues[valueName] = [...(this.state.values[valueName] || []), valueObj[key].value];
      } else {
        newValues[valueName] = valueObj.value;
      }
    }
  
    this.setState({values: newValues})
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = {...this.state.values};
    
    this.props.add(this.props.controls, data);
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
          controlName='teamControls'
          selectsValid={this.state.selectValid}>
          
          {selectForms.map(selectForm => (
            <React.Fragment key={selectForm.option}>
              <label>{selectForm.label}</label>
              <Select
                isMulti={selectForm.isMulti}
                options={this.state[selectForm.option]}
                onChange={(valueObj) => this.selectChangeHandler(valueObj, selectForm.label)}
                className="basic-multi-select"
                classNamePrefix="select"/>
              <div style={{marginBottom: '1rem'}}></div>
            </React.Fragment>
          ))}

        </Forms>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.teamControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls, data) => dispatch(tableActions.add('teams', controls, 'teams-api', data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);
