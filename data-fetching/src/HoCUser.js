import React, { Component, Fragment } from 'react';
import axios from 'axios'

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


export default class HoCUser extends Component {
  
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

  renderTable = () => {
    const { users } = this.state;

    return (
      <table style={{ border: '1px solid black' }}>
        <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>website</th>
        </tr>
        {
          users.map(user => {
            const idUser = user.id
            return <tr key={idUser}>
              <td>{idUser}</td>
              <td>{user.name}</td>
              <td>{user.website}</td>
            </tr>
          })
        }
        </tbody>
      </table>
    )
  }

  render() {
    const { isFetching } = this.state;

    return (<Fragment>
      <h1>HoCUser Fetching</h1>
      {isFetching ? this.renderLoading() : this.renderTable()}
    </Fragment>)
  }

}