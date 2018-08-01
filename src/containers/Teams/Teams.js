import React, { Component } from 'react';
import AddButton from 'components/TablePage/AddButton/AddButton';
import Card from 'components/UI/Card/Card';
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

class Teams extends Component {

  componentDidMount() {
    this.props.getAll('teams', 'teams-api');
  }

  render() {

    const content = (!this.props.loading) ? (
      <React.Fragment>
        {this.props.teams.map(team => (
          <Card key={team.name} {...team} />
        ))}
      </React.Fragment>
    ) : (
      <Loading />
    )

    return (
      <React.Fragment>
        <AddButton entity="team"/>
        <div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {content}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.table.teams,
    loading: state.table.loading
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: (tableName, api) => dispatch(tableActions.getAll(tableName, api))
})

export default connect(mapStateToProps, mapDispatchToProps)(Teams);