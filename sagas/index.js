import {fork} from 'redux-saga/effects';

import items from './items';

export default function* rootSaga() {
  yield fork(items);
}
