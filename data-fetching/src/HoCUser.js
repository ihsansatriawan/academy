import React, { Component, Fragment } from 'react';
import axios from 'axios'
import withDataUser from './withDataUser.js';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


class HoCUser extends Component {

  renderTable = () => {
    const { users } = this.props;

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

  renderLoading = () => {
    return <h1>HoC Sedang Loading Guys!</h1>
  }

  render() {
    const { isFetching } = this.props;

    return (<Fragment>
      <h1>HoCUser Fetching</h1>
      {isFetching ? this.renderLoading() : this.renderTable()}
    </Fragment>)
  }

}

export default withDataUser(HoCUser);