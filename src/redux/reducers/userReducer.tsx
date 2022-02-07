import { ActionTypes } from '../action-types';

const initialState = {
  users: [],
};

export const UserReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
      break;
    case ActionTypes.SET_SINGLE_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
