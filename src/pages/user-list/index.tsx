import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUsers, setLoading, setError } from '../../redux/actions';
import styles from './user-list.module.css';
import Loading from '../../components/loading';
import { RootState } from '../../redux/reducers';

interface User {
  id: number;
  name: string;
  title: string;
  body: string;
}
const UserList = () => {
  const data: User[] = useSelector((state: RootState) => state.allUsers.users);
  const loading = useSelector((state: RootState) => state.allUsers.loading);
  const error = useSelector((state: RootState) => state.allUsers.error);

  const dispatch = useDispatch();
  const fetchUsers = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      dispatch(setUsers(response.data));
    } catch (error) {
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
