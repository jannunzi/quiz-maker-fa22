import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import pageActions from '../../actions/page-actions';

const PageList = (
    {
        notebook = {_id: 123},
        pages,
        deletePage,
        createPageForNotebook,
    }) => {
    return(
        <ul className="list-group">
            {
                pages.map((page) => {
                    return(
                        <li key={page._id} className="list-group-item">
                            <button
                                className="float-right btn btn-danger"
                                onClick={() => deletePage(page)}>
                                Delete
                            </button>
                            <Link to={`/notebooks/${notebook._id}/pages/${page._id}`}>
                                {page.name}
                            </Link>
                        </li>
                    )
                })
            }
            <span className="list-group-item">
                <button
                    onClick={() => createPageForNotebook(notebook)}
                    className="btn btn-block btn-success">
                    Create
                </button>
            </span>
        </ul>
    )
}

const stpm = (state) => ({
    pages: state.pagesReducer.pages
});

const dtpm = (dispatcher) => ({
    createPageForNotebook: (notebook) => {
        pageActions.createPageForNotebook(dispatcher, notebook);
    },
    deletePage: (page) => {
        pageActions.deletePage(dispatcher, page);
    }
})

export default connect(stpm, dtpm)(PageList);