import { combineReducers } from 'redux';
import { UserReducer } from './userReducer';

const Reducers = combineReducers({
  allUsers: UserReducer,
});

export default Reducers;
export type RootState = ReturnType<typeof Reducers>;
