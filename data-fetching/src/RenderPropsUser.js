import React, { Component, Fragment } from 'react';
import axios from 'axios'
import withDataUser from './withDataUser';
import UserRenderProps from './withDataUserRenderProps.js';
import SimpleUserTable from './SimpleUserTable';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

export default class RenderPropsUser extends Component {

  renderLoading = () => {
    return <h1>RenderProps Sedang Loading Guys!</h1>
  }

  renderContent = ({ isFetching, users }) => {
    return <Fragment>
      {isFetching ? this.renderLoading() : <SimpleUserTable users={users} />}
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