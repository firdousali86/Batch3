import {call, put, takeLatest} from 'redux-saga/effects';
import {itemsActions} from '../features/items/itemsSlice';
import {ApiHelper} from '../helpers';

const {requestLatest, success, failure} = itemsActions;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;

    response = yield call(
      callGetRequest,
      payload.url,
      {},
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
      },
    );

    yield put(success(response));
  } catch (ex) {
    yield put(failure(err?.message));
  }
}

export default function* root() {
  yield takeLatest(requestLatest, watchRequest);
}
