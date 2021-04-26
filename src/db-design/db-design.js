import React from 'react'
import {Link} from "react-router-dom";

const DatabaseDesign = () => {
    return (
        <>
            <h2>Database Design</h2>
            <h3>Transactions</h3>
            <div>
                <Link to="/db-design/transactions/transactions-non-repeatable-reads" className="list-group-item">
                    Transactions Non Repeatable Read
                </Link>
                <Link to="/db-design/transactions/transactions-dirty-reads" className="list-group-item">
                    Transactions Dirty Read
                </Link>
            </div>
            <h3>Indexing</h3>
            <div>
                <Link to="/db-design/indexing/indexing-create-composite" className="list-group-item">
                    Indexing Create Composit Index
                </Link>
                <Link to="/db-design/indexing/indexing-create-single-non-unique" className="list-group-item">
                    Indexing Create Single Non Unique Index
                </Link>
            </div>
            <h3>Mongoose Model</h3>
            <div>
                <Link to="/db-design/mongodb/mongoose/model/mongoose-model-find-one" className="list-group-item">
                    Mongo Model Find One
                </Link>
                <Link to="/db-design/mongodb/mongoose/model/mongoose-model-find-by-id" className="list-group-item">
                    Mongo Model Find By Id
                </Link>
                <Link to="/db-design/mongodb/mongoose/model/mongoose-model-find" className="list-group-item">
                    Mongo Model Find
                </Link>
            </div>
            <h3>Mongoose Schema</h3>
            <div>
                <Link to="/db-design/mongodb/mongoose/schema/mongoose-schema-model" className="list-group-item">
                    Mongo Schema Model
                </Link>
                <Link to="/db-design/mongodb/mongoose/schema/mongoose-schema-collection" className="list-group-item">
                    Mongo Schema Collection
                </Link>
            </div>
            <div>
                <Link to="/db-design/mongodb/mongoose/schema/mongoose-schema-number" className="list-group-item">
                    Mongo Schema Number
                </Link>
            </div>
            <h3>Mongo Remove</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/remove/mongo-remove" className="list-group-item">
                    Mongo Remove
                </Link>
            </div>
            <h3>Mongo Update</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/update/mongo-replace" className="list-group-item">
                    Mongo Replace
                </Link>
            </div>
            <div>
                <Link to="/db-design/mongodb/mongo/update/mongo-update" className="list-group-item">
                    Mongo Update
                </Link>
            </div>
            <h3>Mongo Insert</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/insert/mongo-insert" className="list-group-item">
                    Mongo Insert
                </Link>
            </div>
            <h3>Mongo Projection</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/project/mongo-project-exclude-id" className="list-group-item">
                    Mongo Project Exclude ID
                </Link>
                <Link to="/db-design/mongodb/mongo/project/mongo-project-include-only-one" className="list-group-item">
                    Mongo Project Include Only One
                </Link>
                <Link to="/db-design/mongodb/mongo/project/mongo-project-include-several" className="list-group-item">
                    Mongo Project Include Several Fields
                </Link>
                <Link to="/db-design/mongodb/mongo/project/mongo-project-only-one" className="list-group-item">
                    Mongo Project One
                </Link>
            </div>
            
            <h3>Mongo Find</h3>
            <div>
                <Link to="/db-design/mongodb/mongo/mongo-find-$gt" className="list-group-item">
                    Mongo Find $Gt
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-$eq" className="list-group-item">
                    Mongo Find $Eq
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-and" className="list-group-item">
                    Mongo Find And
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-by-multiple-fields" className="list-group-item">
                    Mongo Find By Multiple Fields
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-by-field" className="list-group-item">
                    Mongo Find By Field
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-by-id" className="list-group-item">
                    Mongo Find By Id
                </Link>
                <Link to="/db-design/mongodb/mongo/mongo-find-all" className="list-group-item">
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
