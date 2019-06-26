import React, { Component, Fragment } from 'react';
import axios from 'axios'
import withDataUser from './withDataUser.js';
import SimpleUserTable from './SimpleUserTable';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


class HoCUser extends Component {

  renderLoading = () => {
    return <h1>HoC Sedang Loading Guys!</h1>
  }

  render() {
    const { isFetching, users } = this.props;

    return (<Fragment>
      <h1>HoCUser Fetching</h1>
      {isFetching ? this.renderLoading() : <SimpleUserTable users={users} />}
    </Fragment>)
  }

}

export default withDataUser(HoCUser);