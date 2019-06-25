import React, { Component, Fragment } from 'react';
import axios from 'axios'

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
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  renderLoading = () => {
    return <h1>Sedang Loading Guys!</h1>
  }

  renderTable = () => {
    const { users } = this.state;

    return (
      <table>
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
      <h1>Autonomous Fetching</h1>
      {isFetching ? this.renderLoading() : this.renderTable()}
    </Fragment>)
  }

}