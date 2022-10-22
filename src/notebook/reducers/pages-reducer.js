import {
    CREATE_PAGE_FOR_NOTEBOOK, DELETE_PAGE,
    FIND_PAGE_BY_ID,
    FIND_PAGES_FOR_NOTEBOOK
} from '../actions/page-actions'

const initialState = {
    pages: [
        {
            _id: 'page1',
            notebookId: '123',
            name: 'Page 1',
            content: 'Page 1 content',
        },
        {
            _id: 'page2',
            notebookId: '123',
            name: 'Page 2',
            content: 'Page 2 content',
        },
        {
            _id: 'page3',
            notebookId: '123',
            name: 'Page 3',
            content: 'Page 3 content',
        },

        {
            _id: 'page4',
            notebookId: '234',
            name: 'Page 4',
            content: 'Page 4 content',
        },
        {
            _id: 'page5',
            notebookId: '234',
            name: 'Page 5',
            content: 'Page 5 content',
        },
    ]
};

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAGE_FOR_NOTEBOOK:
            return ({
                ...state,
                pages: [
                    ...state.pages,
                    action.page,
                ]
            });
        case FIND_PAGE_BY_ID:
            return ({
                ...state,
                page: state.pages
                    .find((page) => page._id === action.pageId)
            });
        case FIND_PAGES_FOR_NOTEBOOK:
            return ({
                ...state,
                page: state.pages
                    .find((page) => page.notebookId === action.notebookId)
            });
        case DELETE_PAGE:
            return({
                ...state,
                pages: state.pages.filter((page) => {
                    return(page._id !== action.page._id);
                })
            })
        default:
            return state
    }
};
