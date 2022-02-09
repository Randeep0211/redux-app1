import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSingleUser, setLoading, setError } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import styles from './user-detail.module.css';
import Loading from '../../components/loading';
import { RootState } from '../../redux/reducers';

const UserDetail = () => {
  const data = useSelector((state: RootState) => state.allUsers.user);
  const loading = useSelector((state: RootState) => state.allUsers.loading);
  const error = useSelector((state: RootState) => state.allUsers.error);

  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(setSingleUser(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(data);

  if (loading) {
    return <main>{<Loading />}</main>;
  }

  return (
    <>
      {!!loading || !data ? (
        <p>{error}</p>
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
