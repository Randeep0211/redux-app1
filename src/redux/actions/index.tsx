import { ActionTypes } from '../action-types';

export const SetUsers = (users: any) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const SetSingleUser = (user: any) => {
  return {
    type: ActionTypes.SET_SINGLE_USER,
    payload: user,
  };
};
