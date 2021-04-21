import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, useParams} from "react-router-dom";
import DatabaseDesign from "./db-design/db-design";
import WebDevelopment from "./web-dev/web-dev";
import DbDesignQueryJoinMultipleChoice from "./db-design/query/join/fill-blanks/query-join-multiple-choice";
import DbDesignQueryJoinFillBlanks from "./db-design/query/join/fill-blanks/query-join-fill-blanks";
import DbDesignQueryGroupByCountFillBlanks from "./db-design/query/join/fill-blanks/query-group-by-count-fill-blanks";

import DbDesignInsertIntoValues from "./db-design/insert/insert-into-values";
import DbDesignInsertIntoColumns from "./db-design/insert/insert-into-columns";
import DbDesignInsertIntoSelect from "./db-design/insert/insert-into-select";

import GroupBySingleTableMultipleChoice from "./db-design/group-by/single-table/multiple-choice/group-by-single-table-multiple-choice"
import GroupByTwoTablesMultipleMinMaxChoice from "./db-design/group-by/two-tables/multiple-choice/group-by-two-tables-multiple-min-max-choice";
import GroupByTwoTablesMultipleCountChoice
    from "./db-design/group-by/two-tables/multiple-choice/group-by-two-tables-multiple-count-choice";
import InlineViewLegalTrueFalse from "./db-design/inline-views/true-false/inline-view-legal-true-false";
import UmlGroupByMultipleChoice from "./db-design/group-by/uml-group-by-multiple-choice";
import UmlGroupByMultipleSum from "./db-design/group-by/uml-group-by-multiple-choice-sum";
import FirstNormalForm from "./db-design/normalization/first-normal-form";
import SecondNormalForm from "./db-design/normalization/second-normal-form";
import ThirdNormalForm from "./db-design/normalization/third-normal-form";
import TextToUml from "./db-design/uml/text-to-uml";
import RelationalAlgebraSymbol from "./db-design/relational-algebra/symbol";
import RelationalAlgebraText from "./db-design/relational-algebra/text";
import WidgetList from "./web-dev/widget-list/widget-list";
import T from "./web-dev/react/state/function/use-state/t";
import Radios from "./web-dev/html/radio";
import Toggle from "./web-dev/react/state/class/state1";
import StateRedux from "./web-dev/react/state/redux/state-redux";
import SpreaderArray from "./web-dev/es6/spreader/spreader-array";
import SpreaderObject from "./web-dev/es6/spreader/spreader-object";
import StateClassPrevState from "./web-dev/react/state/class/state-class-prev-state";
import ReactClassProps from "./web-dev/react/class/props";
import ReactFunctionReturn from "./web-dev/react/function/return/return";
import Add from "./web-dev/routing/add";
import Subtract from "./web-dev/routing/subtract";
import {MongoFindAll} from "./db-design/mongodb/mongo/mongo-find-all";
import {MongoFindById} from "./db-design/mongodb/mongo/mongo-find-by-id";
import {MongoFindByField} from "./db-design/mongodb/mongo/mongo-find-by-field";
import {MongoFindByMultipleFields} from "./db-design/mongodb/mongo/mongo-find-by-multiple-fields";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <h1>Quiz Maker</h1>
                <div className="row">
                    <div className="col-2">
                        <div>
                            <Link to="/db-design" className="list-group-item">DB</Link>
                            <Link to="/web-dev" className="list-group-item">WebDev</Link>
                        </div>
                    </div>
                    <div className="col-10">

                        <Route path="/add/:a/:b">
                            <Add/>
                        </Route>
                        <Route path="/sub/:c/:d">
                            <Subtract/>
                        </Route>



                        <Route path="/db-design" exact component={DatabaseDesign}/>
                        <>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-multiple-fields"
                                   exact component={MongoFindByMultipleFields}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-field"
                                   exact component={MongoFindByField}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-id"
                                   exact component={MongoFindById}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-all"
                                   exact component={MongoFindAll}/>
                        </>
                        
                        <>
                            <Route path="/web-dev/react/function/return" exact
                                   component={ReactFunctionReturn}/>

                            <Route path="/web-dev/react/class/props" exact
                                   component={ReactClassProps}/>

                        </>
                        <>
                            <Route path="/web-dev/es6/spreader/array" exact
                                   component={SpreaderArray}/>
                            <Route path="/web-dev/es6/spreader/object" exact
                                   component={SpreaderObject}/>
                        </>
                        <>
                            <Route path="/web-dev/react/state/class/prev-state" exact
                                   component={StateClassPrevState}/>
                                   
                            <Route path="/web-dev/react/state/redux" exact
                                   component={StateRedux}/>

                            <Route path="/web-dev/react/state/class" exact
                                   component={Toggle}/>

                            <Route path="/web-dev/html/radio" exact
                                   component={Radios}/>

                            <Route path="/web-dev/widget-list" exact
                                   component={WidgetList}/>

                            <Route path="/db-design/relational-algebra/text" exact
                                   component={RelationalAlgebraText}/>
                            <Route path="/db-design/relational-algebra/symbol" exact
                                   component={RelationalAlgebraSymbol}/>

                            <Route path="/db-design/uml/text-to-uml" exact
                                   component={TextToUml}/>

                            <Route path="/db-design/normalization/third-normal-form" exact
                                   component={ThirdNormalForm}/>
                            <Route path="/db-design/normalization/second-normal-form" exact
                                   component={SecondNormalForm}/>
                            <Route path="/db-design/normalization/first-normal-form" exact
                                   component={FirstNormalForm}/>

                            <Route path="/db-design/inline-views/true-false" exact
                                   component={InlineViewLegalTrueFalse}/>

                            <Route path="/db-design/group-by/uml-group-by-multiple-choice-sum" exact
                                   component={UmlGroupByMultipleSum}/>
                            <Route path="/db-design/group-by/uml-group-by-multiple-choice" exact
                                   component={UmlGroupByMultipleChoice}/>
                            <Route path="/db-design/group-by/single-table/multiple-choice" exact
                                   component={GroupBySingleTableMultipleChoice}/>
                            <Route path="/db-design/group-by/two-tables/min-max/multiple-choice" exact
                                   component={GroupByTwoTablesMultipleMinMaxChoice}/>
                            <Route path="/db-design/group-by/two-tables/count/multiple-choice" exact
                                   component={GroupByTwoTablesMultipleCountChoice}/>


                            <Route path="/db-design/query/join/multiple-choice" exact
                                   component={DbDesignQueryJoinMultipleChoice}/>
                            <Route path="/db-design/query/join/fill-blanks" exact
                                   component={DbDesignQueryJoinFillBlanks}/>
                            <Route path="/db-design/query/group-by/fill-blanks" exact
                                   component={DbDesignQueryGroupByCountFillBlanks}/>

                            <Route path="/db-design/insert/fill-blanks/insert-into-values" exact
                                   component={DbDesignInsertIntoValues}/>
                            <Route path="/db-design/insert/fill-blanks/insert-into-columns" exact
                                   component={DbDesignInsertIntoColumns}/>
                            <Route path="/db-design/insert/fill-blanks/insert-into-select" exact
                                   component={DbDesignInsertIntoSelect}/>
                        </>
                        <Route path="/web-dev" exact component={WebDevelopment}/>
                        <>
                            <Route path="/web-dev/react/function/use-state" exact component={T}/>
                            
                        </>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
