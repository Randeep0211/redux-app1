import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetSingleUser } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import styles from './user-detail.module.css';

const UserDetail = () => {
  const data = useSelector((state: any) => state.allUsers.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios.get<any[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch(SetSingleUser(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(data);
  return (
    <>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.card}>
          <div> UserId: {data.userId}</div>
          <div>Id: {data.id}</div>
          <div>Tittle: {data.title}</div>
          <div>Body: {data.body}</div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
