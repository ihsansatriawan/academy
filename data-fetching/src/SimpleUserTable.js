import React from 'react';

export default function UserTable({ users }) {
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