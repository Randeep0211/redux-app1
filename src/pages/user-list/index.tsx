import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUsers, setLoading, setError } from '../../redux/actions';
import styles from './user-list.module.css';
import Loading from '../../components/loading';

const UserList = () => {
  const data: any[] = useSelector((state: any) => state.allUsers.users);
  const loading = useSelector((state: any) => state.allUsers.loading);
  const error = useSelector((state: any) => state.allUsers.error);

  const dispatch = useDispatch();
  const fetchUsers = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get<any[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );

      dispatch(setUsers(response.data));
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className={styles.container}>
      {!loading && !data.length ? (
        <p>{error}</p>
      ) : (
        data.map((el, index) => {
          return (
            <div className={styles.card}>
              <div> key={index}</div>
              <div> id={el.id}</div>
              <div>name={el.name}</div>
              <div> title={el.title}</div>
              <div> body={el.body}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserList;
