import React from 'react';
import PageList from "../pages/page-list";
import Page from "../pages/page";
import {useParams} from 'react-router-dom';

export const Notebook = () => {
    const params = useParams();
    return(
        <div>
            <h1>Notebook {params.notebookId}</h1>
            <div className="row">
                <div className="col-2">
                    <PageList/>
                </div>
                <div className="col-10">
                    <Page/>
                </div>
            </div>
        </div>
    )
}