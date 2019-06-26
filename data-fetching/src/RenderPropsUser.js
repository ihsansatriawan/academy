import React, { Component, Fragment } from 'react';
import axios from 'axios'
import withDataUser from './withDataUser';
import UserRenderProps from './withDataUserRenderProps.js';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


export default class RenderPropsUser extends Component {

  renderTable = (users) => {

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
    return <h1>RenderProps Sedang Loading Guys!</h1>
  }

  renderContent = ({ isFetching, users }) => {
    return <Fragment>
      {isFetching ? this.renderLoading() : this.renderTable(users)}
    </Fragment>
  }

  render() {

    return (<Fragment>
      <h1>RenderPropsUser Fetching</h1>
      <UserRenderProps>
      {this.renderContent}
      </UserRenderProps>
    </Fragment>)
  }

}