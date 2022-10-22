export const FIND_NOTEBOOK_BY_ID = 'FIND_NOTEBOOK_BY_ID';
export const CREATE_NOTEBOOK = 'CREATE_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';

export const findNotebookById = (dispatcher, notebookId) => {
    dispatcher({
        type: FIND_NOTEBOOK_BY_ID,
        notebookId
    });
};

export const createNotebook = (dispatcher) => {
    dispatcher({
        type: CREATE_NOTEBOOK,
        notebook: {
            _id: (new Date()).getTime(),
            name: 'New Notebook',   
        }
    });
};

export const deleteNotebook = (dispatcher, notebook) => {
    dispatcher({
        type: DELETE_NOTEBOOK,
        notebook
    })
};

const api = {
    findNotebookById,
    createNotebook,
    deleteNotebook,
};

export default api;
