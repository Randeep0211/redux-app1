import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetUsers } from '../../redux/actions';
import styles from './user-list.module.css';

const UserList = () => {
  const data: any[] = useSelector((state: any) => state.allUsers.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios.get<any[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );

    dispatch(SetUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      {data.map((el, index) => {
        return (
          <div className={styles.card}>
            <div> key={index}</div>
            <div> id={el.id}</div>
            <div>name={el.name}</div>
            <div> title={el.title}</div>
            <div> body={el.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
