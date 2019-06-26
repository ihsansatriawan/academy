import React, { Component, Fragment } from 'react';
import axios from 'axios'
import SimpleUserTable from './SimpleUserTable';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


export default class Autonomous extends Component {
  
  state = {
    isFetching: false,
    users: []
  };

  fetchUsers = async () => {
    try {
        this.setState({...this.state, isFetching: true});
        const response = await axios.get(USER_SERVICE_URL);
        this.setState({users: response.data, isFetching: false});
    } catch (e) {
        console.log(e);
        this.setState({...this.state, isFetching: false});
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  renderLoading = () => {
    return <h1>Sedang Loading Guys!</h1>
  }

  render() {
    const { isFetching, users } = this.state;

    return (<Fragment>
      <h1>Autonomous Fetching</h1>
      {isFetching ? this.renderLoading() : <SimpleUserTable users={users} />}
    </Fragment>)
  }

}