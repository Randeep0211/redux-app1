import { ActionTypes } from '../action-types';

const initialState = {
  users: [],
};

export const UserReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };

    case ActionTypes.SET_SINGLE_USER:
      return { ...state, user: payload };

    case ActionTypes.SET_LOADING:
      return { ...state, loading: payload };

    case ActionTypes.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
