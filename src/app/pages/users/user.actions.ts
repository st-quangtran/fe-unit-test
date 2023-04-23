import ACTION_TYPES from '@app/core/constants/types';

export const getUserList = () => {
  return {
    type: ACTION_TYPES.GET_USER_LIST
  };
};

export const getUserListSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.GET_USER_LIST_SUCCESS,
    payload: {
      data
    }
  };
};

export const getUserListError = (error) => {
  return {
    type: ACTION_TYPES.GET_USER_LIST_ERROR,
    payload: { error }
  };
};

export const getUserDetail = (id: string) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL,
    payload: {
      id
    }
  };
};

export const getUserDetailSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL_SUCCESS,
    payload: {
      data
    }
  };
};

export const getUserDetailError = (error) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL_ERROR,
    payload: { error }
  };
};
