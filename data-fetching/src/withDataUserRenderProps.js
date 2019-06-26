import React, { Component } from 'react';
import axios from 'axios'

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

export default class PropsUser extends Component {
  
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

  render() {

    return this.props.children(this.state)
  }

}