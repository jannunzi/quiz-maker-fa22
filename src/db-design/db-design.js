import React from 'react'
import {Link} from "react-router-dom";

const DatabaseDesign = () => {
    return (
        <>
            <h2>Database Design</h2>
            
            <h3>Mongo</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/mongo-find-all"
                      className="list-group-item">
                    Mongo Find All
                </Link>
            </div>
            
            <h3>Relational Algebra</h3>
            <div>
                <Link to="/db-design/relational-algebra/text" className="list-group-item">
                    Relational Algebra Text
                </Link>
                <Link to="/db-design/relational-algebra/symbol" className="list-group-item">
                    Relational Algebra Symbol
                </Link>
            </div>
            <h3>UML</h3>
            <div>
                <Link to="/db-design/uml/text-to-uml" className="list-group-item">
                    Text to UML
                </Link>
            </div>
            <h3>Normalization</h3>
            <div>
                <Link to="/db-design/normalization/third-normal-form" className="list-group-item">
                    Third Normal Form
                </Link>
                <Link to="/db-design/normalization/second-normal-form" className="list-group-item">
                    Second Normal Form
                </Link>
                <Link to="/db-design/normalization/first-normal-form" className="list-group-item">
                    First Normal Form
                </Link>
            </div>
            <h3>Inline Views</h3>
            <div>
                <Link to="/db-design/inline-views/true-false" className="list-group-item">
                    Inline Views Legal True False
                </Link>
            </div>
            <h3>Group By</h3>
            <div>
                <Link to="/db-design/group-by/uml-group-by-multiple-choice-sum" className="list-group-item">
                    UML Group By Multiple Choice Sum
                </Link>
                <Link to="/db-design/group-by/uml-group-by-multiple-choice" className="list-group-item">
                    UML Group By Multiple Choice
                </Link>
                <Link to="/db-design/group-by/single-table/multiple-choice" className="list-group-item">
                    Group By Single Table Multiple Choice
                </Link>
                <Link to="/db-design/group-by/two-tables/min-max/multiple-choice" className="list-group-item">
                    Group By Two Tables Min Max Multiple Choice
                </Link>
                <Link to="/db-design/group-by/two-tables/count/multiple-choice" className="list-group-item">
                    Group By Two Tables Count Multiple Choice
                </Link>
            </div>
            <h3>Insert</h3>
            <div>
                <Link to="/db-design/insert/fill-blanks/insert-into-values" className="list-group-item">
                    Insert into Values
                </Link>
                <Link to="/db-design/insert/fill-blanks/insert-into-columns" className="list-group-item">
                    Insert into Columns
                </Link>
                <Link to="/db-design/insert/fill-blanks/insert-into-select" className="list-group-item">
                    Insert into Select
                </Link>
            </div>
            <h3>Query</h3>
            <div>
                <Link className="list-group-item" to="/db-design/query/join/multiple-choice">
                    DB Design Query Join Multiple Choice
                </Link>
                <Link className="list-group-item" to="/db-design/query/join/fill-blanks">
                    DB Design Query Join Fill Blanks
                </Link>
                <Link className="list-group-item" to="/db-design/query/group-by/fill-blanks">
                    DB Design Query Group By Count Fill Blanks
                </Link>
            </div>
        </>
    )
}

export default DatabaseDesign
