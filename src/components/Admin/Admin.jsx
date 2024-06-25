import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Admin.module.css'; // Import the CSS file (rename it as Admin.css or adjust as needed)

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>
        Admin Panel
      </h1>

      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.mobile}</td>
                <td>{user.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
