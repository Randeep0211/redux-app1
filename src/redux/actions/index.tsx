import { ActionTypes } from '../action-types';

export const setUsers = (users: any) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const setSingleUser = (user: any) => {
  return {
    type: ActionTypes.SET_SINGLE_USER,
    payload: user,
  };
};

export const setLoading = (loading: any) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setError = (error: any) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: error,
  };
};
