import { call, put } from "redux-saga/effects";

import api from "../../../services/Api";
import { loadSuccess, loadFailure, loadRequest } from "./actions";

export function* load() {
    try {
        const response = yield call(api.get,'users/andersonRocha091/repos');

        yield put(loadSuccess(response.data));

    } catch (error) {
       yield put(loadFailure()) 
    }
}