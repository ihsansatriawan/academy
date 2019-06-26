import React, { Component } from 'react';
import axios from 'axios'

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

// This function takes a component...
export default function withDataUser(WrappedComponent) {
  // ...and returns another component...
  return class HoCUser extends Component {
  
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
      const { users, isFetching } = this.state;
  
      return <WrappedComponent users={users} isFetching={isFetching} {...this.props} />;
    }
  
  }

}