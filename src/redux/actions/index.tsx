import { ActionTypes } from '../action-types';

export const setUsers = (users: string[]) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const setSingleUser = (user: null) => {
  return {
    type: ActionTypes.SET_SINGLE_USER,
    payload: user,
  };
};

export const setLoading = (loading: boolean) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setError = (error: Error) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: error,
  };
};
