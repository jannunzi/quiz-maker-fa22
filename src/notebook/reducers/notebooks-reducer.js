import {
    CREATE_NOTEBOOK,
    DELETE_NOTEBOOK,
    FIND_NOTEBOOK_BY_ID,
} from '../actions/notebook-actions'

const initialState = {
    notebooks: [
        {
            _id: '123',
            name: 'Notebook 1',
        },
        {
            _id: '234',
            name: 'Notebook 2',
        },
    ]
};

export const notebooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTEBOOK:
            return ({
                ...state,
                notebooks: [
                    ...state.notebooks,
                    action.notebook,
                ]
            });
        case FIND_NOTEBOOK_BY_ID:
            return ({
                ...state,
                notebook: state.notebooks
                    .find((notebook) => notebook._id === action.notebookId)
            });
        case DELETE_NOTEBOOK:
            return({
                ...state,
                notebooks: state.notebooks.filter((notebook) => {
                    return(notebook._id !== action.notebook._id);
                })
            })
        default:
            return state
    }
};
