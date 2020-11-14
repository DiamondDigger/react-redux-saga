import { FETCH_POST, REQUEST_POST } from "./types";
import {takeEvery, put, call} from 'redux-saga/effects'
import { hideLoader, showLoader } from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POST, fetchPosts)
}

function* fetchPosts() {
    yield put(showLoader())
    const timeShowLoader = Date.now()
    const payload = yield call(fetchPost)
    yield put({type: FETCH_POST, payload})
    yield put(hideLoader())
    const timeHideLoader = Date.now()
    yield call(timer, ...[timeHideLoader, timeShowLoader])
}

async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    return response.json()
}

const timer = (a,b) => console.log(`Time of loading is ${Math.abs(b-a)} ms`) 