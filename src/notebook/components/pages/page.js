import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

const Page = (
    {
        page = {},
        findPageById,
    }) => {
    const {pageId} = useParams();
    return(
        <div>
            <h2>Page {pageId}</h2>
            <div className="" contentEditable={true}>
            </div>
        </div>
    )
};

const stpm = (state) => ({
    page: state.pagesReducer.page,
})

const dtpm = (dispatcher) => ({
    findPageById: (pageId) => {
        
    },
})

export default connect(stpm, dtpm)(Page);