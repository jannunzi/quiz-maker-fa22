import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import notebookActions from '../../actions/notebook-actions';

const NotebookList = (
    {
        notebooks,
        deleteNotebook,
        createNotebook,
    }) => {
    return(
        <ul className="list-group">
            {
                notebooks.map((notebook) => {
                    return(
                        <li key={notebook._id} className="list-group-item">
                            <button
                                className="float-right btn btn-danger"
                                onClick={() => deleteNotebook(notebook)}>
                                Delete
                            </button>
                            <Link to={`/notebooks/${notebook._id}`}>
                                {notebook.name}
                            </Link>
                        </li>
                    )
                })
            }
            <span className="list-group-item">
                <button
                    onClick={() => createNotebook()}
                    className="btn btn-block btn-success">
                    Create
                </button>
            </span>
        </ul>
    )
}

const stpm = (state) => ({
    notebooks: state.notebooksReducer.notebooks
});

const dtpm = (dispatcher) => ({
    createNotebook: (notebook) => {
        notebookActions.createNotebook(dispatcher, notebook);
    },
    deleteNotebook: (notebook) => {
        notebookActions.deleteNotebook(dispatcher, notebook);
    }
})

export default connect(stpm, dtpm)(NotebookList);