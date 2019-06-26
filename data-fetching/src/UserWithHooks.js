import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SimpleUserTable from './SimpleUserTable';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

export default function UserWithHooks() {
  const [data, setData] = useState({ users: [], isFetching: false })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          setData({...data, isFetching: true});
          const response = await axios.get(USER_SERVICE_URL);
          setData({users: response.data, isFetching: false});
      } catch (e) {
          console.log(e);
          setData({...data, isFetching: false});
      }
    };

    fetchUsers();

  }, [])

  return (<div>
    <h1>Hooks Fetching</h1>
    {data.isFetching ? <h1>Loading Hooks coi!</h1> : <SimpleUserTable users={data.users} />}
    </div>)
}