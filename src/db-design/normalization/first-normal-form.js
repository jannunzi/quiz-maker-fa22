import React from 'react'
import {randomSet, work} from "../../utils/utils";
import Pk from "../utils/pk";
import Fk from "../utils/fk";

const FirstNormalForm = () => {
    const capitalizedStrings = randomSet(10, work, true)
    const lowercaseStrings = randomSet(10, work)
    
    console.log(capitalizedStrings)
    
    const customersTable = capitalizedStrings[0];//"CUSTOMERS";
    const customerId = lowercaseStrings[0];//"cid";
    const firstName = lowercaseStrings[1];//"first_name";
    const lastName = lowercaseStrings[2];//"last_name";
    const telephone = lowercaseStrings[3];//"telephone";    
    
    const telephoneTable = capitalizedStrings[1];//"TELEPHONES"
    
    return(
        <div>
            <h1>First Normal Form</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                {customersTable}(<Pk name={customerId}/>, {firstName}, {lastName}, {telephone})
                <br/>
                <br/>
                If each record in {customersTable} can have multiple
                <br/>
                values for {telephone}s, which of the following alternatives
                <br/>
                would not break first normal form?
            </div>
            <div id="answers234">
                <hr/>
                {customersTable}(<Pk name={customerId}/>, {firstName}, {lastName})
                <br/>
                {telephoneTable}({telephone}, <Fk name={customerId}/>)
                <hr/>
                {customersTable}(<Pk name={customerId}/>, {firstName}, {lastName}, {telephone}s)
                <br/>
                where {telephone}s contains a comma separated list of all the {telephone}s
                <hr/>
                The same schema, but a separate record for each {telephone}
                <hr/>
                {customersTable}(<Pk name={customerId}/>, {firstName}, {lastName}, {telephone}1, {telephone}2, {telephone}3, ... {telephone}N)
                <br/>
                where fields {telephone}X contain the {telephone}s
            </div>
        </div>
    )
}

export default FirstNormalForm