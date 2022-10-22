import React from 'react';
import NotebookList from "./notebooks/notebook-list";
import {combineReducers, createStore} from "redux";
import {pagesReducer} from "../../reducers/pages-reducer";
import {notebooksReducer} from "../../reducers/notebooks-reducer";

const reducer = combineReducers({
    pagesReducer, notebooksReducer
});
const store = createStore(reducer);

export const Main = () => {
    return(
        <Provider store={store}>
            <NotebookList/>
        </Provider>
    );
}