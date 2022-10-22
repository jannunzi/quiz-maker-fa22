export const FIND_PAGE_BY_ID = 'FIND_PAGE_BY_ID';
export const FIND_PAGES_FOR_NOTEBOOK = 'FIND_PAGES_FOR_NOTEBOOK';
export const CREATE_PAGE_FOR_NOTEBOOK = 'CREATE_PAGE_FOR_NOTEBOOK';
export const DELETE_PAGE = 'DELETE_PAGE';

export const findPageById = (dispatcher, pageId) => {
    dispatcher({
        type: FIND_PAGE_BY_ID,
        pageId
    });
};

export const findPagesForNotebook = (dispatcher, notebookId) => {
    dispatcher({
        type: FIND_PAGES_FOR_NOTEBOOK,
        notebookId
    });
};

export const createPageForNotebook = (dispatcher, notebook) => {
    dispatcher({
        type: CREATE_PAGE_FOR_NOTEBOOK,
        page: {
            _id: (new Date()).getTime(),
            notebookId: notebook._id,
            name: 'New Page',   
        }
    });
};

export const deletePage = (dispatcher, page) => {
    dispatcher({
        type: DELETE_PAGE,
        page
    })
};

const api = {
    findPageById,
    findPagesForNotebook,
    createPageForNotebook,
    deletePage,
};

export default api;
