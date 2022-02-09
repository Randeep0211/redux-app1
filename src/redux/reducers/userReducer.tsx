import { ActionTypes } from '../action-types';

interface User {
  id: number;
  name: string;
  title: string;
  body: string;
}
interface State {
  users: User[];
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  users: [],
  error: '',
  loading: false,
  user: null,
};

export const UserReducer = (
  state: State = initialState,
  { type, payload }: any
) => {
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
