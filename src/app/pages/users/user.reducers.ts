import { createReducer } from '@app/core/helpers/reducer-factory';
import ACTION_TYPES from '@core/constants/types';

const initialState = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  userList: null,
  userDetail: null,
  error: null,
};

const getUserListSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  userList: payload.data
});

const getUserListError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error
});

const getUserList = (state, payload) => ({
  ...state,
  isLoading: true
});

const getUserDetailSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  userDetail: payload.data
});

const getUserDetailError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error
});

const getUserDetail = (state, payload) => ({
  ...state,
  isLoading: true
});

const strategies = {
  [ACTION_TYPES.GET_USER_LIST]: getUserList,
  [ACTION_TYPES.GET_USER_LIST_SUCCESS]: getUserListSuccess,
  [ACTION_TYPES.GET_USER_LIST_ERROR]: getUserListError,
  [ACTION_TYPES.GET_USER_DETAIL]: getUserDetail,
  [ACTION_TYPES.GET_USER_DETAIL_SUCCESS]: getUserDetailSuccess,
  [ACTION_TYPES.GET_USER_DETAIL_ERROR]: getUserDetailError,
  __default__: state => state
};

const userReducer = createReducer(strategies, initialState);

export default userReducer;
