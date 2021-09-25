import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getList } from "api/axios";

/**
 * Action Type
 */
const SET_SECTION = "mail/SET_SECTION";
const SET_READ = "mail/SET_READ";
const SET_DELETE = "mail/SET_DELETE";

const GET_ITMES = "mail/GET_ITEMS";
const GET_ITEMS_SUCCESS = "mail/GET_ITEMS_SUCCESS";
const GET_ITEMS_FAILURE = "mail/GET_ITEMS_FAILURE";
/**
 * Action Creator Function
 */
export const setSection = createAction(SET_SECTION, (section) => section);
export const setRead = createAction(SET_READ, (id) => id);
export const setDelete = createAction(SET_DELETE, (id) => id);

export const getItems = createAction(GET_ITMES);

function* sagaGetItems(type) {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  try {
    const payload = yield call(getList);
    yield put({ type: SUCCESS, payload });
  } catch (error) {
    yield put({ type: FAILURE, failure: true, payload: error });
  }
}

export function* watchItems() {
  yield takeEvery(GET_ITMES, () => sagaGetItems(GET_ITMES));
}

/**
 * initial State
 */
const initialState = {
  selectedId: 1,
  section: "inbox",
  items: {
    loading: false,
    data: [],
    failure: null,
  },
};

/**
 * Reducer
 */
const mail = handleActions(
  {
    [SET_SECTION]: (state, { payload: section }) =>
      produce(state, (draft) => {
        draft.section = section;
        draft.selectedId = draft.items.data.findIndex((item) => item.section === section) + 1;
      }),

    [SET_READ]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.items.data.findIndex((item) => item.id === id);
        draft.items.data[index].read = true;
        draft.selectedId = id;
      }),

    [SET_DELETE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        // trash 로 변경
        const index = draft.items.data.findIndex((item) => item.id === id);
        draft.items.data[index].section = "trash";

        // selectedId 변경
        const nextIndex = state.items.data.findIndex(
          (item) => item.section === "inbox" && item.id !== id
        );

        if (nextIndex > -1) {
          draft.items.data[nextIndex].read = true;
          draft.selectedId = draft.items.data[nextIndex].id;
        } else {
          draft.items.data[0].read = true;
          draft.selectedId = 1;
        }
      }),

    [GET_ITMES]: (state, action) =>
      produce(state, (draft) => {
        draft.items = { loading: true, data: null, failure: null };
      }),
    [GET_ITEMS_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.items = { loading: false, data: payload, failure: null };
      }),
    [GET_ITEMS_FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.items = { loading: false, data: null, failure: payload };
      }),
  },
  initialState
);

export default mail;
