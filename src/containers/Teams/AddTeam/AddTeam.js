import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class AddTeam extends Component {
  state = {
  };

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls, this.state.tags);
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

        </Forms>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.teamControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls, tags) => dispatch(tableActions.add('teams', controls, 'teams-api', tags)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);
