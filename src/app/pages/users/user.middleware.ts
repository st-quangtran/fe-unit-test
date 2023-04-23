import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '@app/core/constants/types';
import { getUserListError, getUserListSuccess, getUserDetailSuccess, getUserDetailError } from './user.actions';
import { ApiService } from '@app/core/services/api.service';
import { ENDPOINT } from '@config/endpoint';

const api = new ApiService();

export function* getUserList() {
  try {
    const res = yield api.get([ENDPOINT.user.index]);
    yield put(getUserListSuccess(res));
  } catch (error) {
    // handle error response
    yield put(getUserListError(error));
  }
}

export function* getUserDetail({ payload }: AnyAction) {
  try {
    const res = yield api.get([`${ENDPOINT.user.index}/${payload.id}`]);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    // handle error response
    yield put(getUserDetailError(error));
  }
}

export function* watchGetUserList() {
  yield takeLatest(ACTION_TYPES.GET_USER_LIST, getUserList);
  yield takeLatest(ACTION_TYPES.GET_USER_DETAIL, getUserDetail);
}
