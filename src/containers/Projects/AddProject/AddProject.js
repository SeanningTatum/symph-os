import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';
import Select from 'react-select';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';
import * as formControlActions from 'store/actions/formControls';
  
const selectForms = [
  {option: 'clientOptions', label: 'Client'},
  {option: 'contactOptions', label: 'Client Contact'},
  {option: 'teamOptions', label: 'Team'},
];

export class AddProject extends Component {

  state = {
    clientOptions: [],
    contactOptions: [],
    projectManagerOptions: [],
    teamOptions: [],
    values: {
      client: '',
      client_contact: '',
      team: ''
    },
    selectsValid: false
  }

  componentDidMount() {
    this.getOptions();
    this.setState({selectsValid: this.areSelectsValid()});
  }

  componentDidUpdate(_, prevState) {
    if (this.state.values !== prevState.values) {
      this.setState({selectsValid: this.areSelectsValid()});
    }
  }

  areSelectsValid = () => {
    for (const key in this.state.values) {
      console.log(key, this.state.values[key])
      if (this.state.values[key] === '') {
        return false;
      }
    }
    return true;
  }

  
  selectChangeHandler = (valueObj, name) => {
    const valueName = name.replace(/\s+/, "_").toLowerCase();
    const newValues = {...this.state.values};
    
    newValues[valueName] = valueObj.value;
    this.setState({values: newValues})
  }

  getOptions = () => {
    const options = {
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      },
    };
    
    // Get Clients
    fetch('http://localhost:8080/_ah/api/clientsapi/v1/getClients', options)
      .then(response => response.json())
      .then(options => this.setState({clientOptions: options.clients}));

    // Get Contacts
    fetch('http://localhost:8080/_ah/api/contactsapi/v1/getContactNames', options)
      .then(response => response.json())
      .then(options => this.setState({contactOptions: options.contacts}));

    // Get Teams
    fetch('http://localhost:8080/_ah/api/teamsapi/v1/getTeamNames', options)
      .then(response => response.json())
      .then(options => this.setState({teamOptions: options.teams}));
  }

  onSubmit = (event) => {
    event.preventDefault();

    const data = {...this.state.values};
    this.props.add(this.props.controls, data);

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
        controlName='projectControls'
        selectsValid={this.state.selectsValid}>

        {selectForms.map(selectForm => (
          <React.Fragment key={selectForm.option}>
            <label>{selectForm.label}</label>
            <Select
              options={this.state[selectForm.option]}
              onChange={(valueObj) => this.selectChangeHandler(valueObj, selectForm.label)}
              className="basic-multi-select"
              classNamePrefix="select"/>
            <div style={{marginBottom: '1rem'}}></div>
          </React.Fragment>
        ))}
        
      </Forms>
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.projectControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls, data) => dispatch(tableActions.add('projects', controls, 'projectsapi', data)),
  resetForm: (controlName) => (dispatch(formControlActions.resetForm(controlName))),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
