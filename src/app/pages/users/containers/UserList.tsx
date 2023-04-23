import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserList } from '../user.actions';

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state: any) => state.userReducer.userList);
  const isLoading = useSelector((state: any) => state.userReducer.isLoading);
  const error = useSelector((state: any) => state.userReducer.error);

  const [users, setUsers] = useState([]);

  const onClickDeleteUser = (id: string) => {
    setUsers(users?.filter((user) => user.id !== id));
  };

  const navigateToDetail = (id: string) => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  return (
    <>
      <h1 data-testid="title">USERS</h1>
      {isLoading ? (
        <span data-testid="loading" className="loading-indicator">
          Loading
        </span>
      ) : (
        ''
      )}
      {error ? <p data-testid="error">Error</p> : ''}
      {users && users.length === 0 ? <p data-testid="empty">Empty</p> : ''}
      {users && users.length ? (
        <table data-testid="user-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Website</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td data-testid={`user-${user.id}`}>
                  <button onClick={() => navigateToDetail(user.id)} data-testid={`detail-${user.id}`}>
                    {user.name}
                  </button>
                </td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>
                  <button data-testid={`delete-user-${user.id}`} onClick={() => onClickDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </>
  );
};

export default UserList;
