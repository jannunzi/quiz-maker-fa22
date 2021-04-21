import React from 'react'

const WidgetList = () => {
    return(
        <>
            <i className="fas fa-plus fa-2x margin-top-15px float-right"></i>
            <br/><br/><br/>
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="fas fa-cog float-right"></i>
                    <h1>Heading not being edited (default)</h1>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-10">
                            <select className="form-control">
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option>Video</option>
                                <option>Image</option>
                                <option>Link</option>
                                <option>List</option>
                                <option>HTML</option>
                            </select>
                            <input className="margin-top-15px form-control" value={`Heading being edited`}/>
                            <select className="margin-top-15px form-control">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                                <option>Heading 3</option>
                                <option>Heading 4</option>
                                <option>Heading 5</option>
                                <option>Heading 6</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <i className="fas fa-check float-right margin-left-5px"></i>
                            <i className="fas fa-trash float-right"></i>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <i className="fas fa-cog float-right"></i>
                    <p>Paragraph not being edited (default). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-10">
                            <select className="form-control">
                                <option>Heading</option>
                                <option selected={true}>Paragraph</option>
                                <option>Video</option>
                                <option>Link</option>
                                <option>List</option>
                                <option>HTML</option>
                            </select>
                            <textarea rows={5} className="margin-top-15px form-control">
                                Paragraph being edited. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                        </div>
                        <div className="col-2">
                            <i className="fas fa-check float-right margin-left-5px"></i>
                            <i className="fas fa-trash float-right"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default WidgetList