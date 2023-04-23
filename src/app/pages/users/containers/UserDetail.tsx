import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../user.actions';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state: any) => state.userReducer.userDetail);
  const error = useSelector((state: any) => state.userReducer.error);
  const isLoading = useSelector((state: any) => state.userReducer.isLoading);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);

  return (
    <>
      <h1>USER DETAIL</h1>
      {isLoading ? (
        <span data-testid="loading" className="loading-indicator">
          Loading
        </span>
      ) : (
        ''
      )}
      {error ? <p data-testid="error">Error</p> : ''}
      {userDetail ? (
        <div data-testid="user-detail">
          <p>
            <span>Name:</span>
            <span>{userDetail.name}</span>
          </p>
          <p>
            <span>Email:</span>
            <span>{userDetail.email}</span>
          </p>
          <p>
            <span>Phone:</span>
            <span>{userDetail.phone}</span>
          </p>
          <p>
            <span>Username:</span>
            <span>{userDetail.username}</span>
          </p>
          <p>
            <span>Website:</span>
            <span>{userDetail.website}</span>
          </p>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default UserDetail;
