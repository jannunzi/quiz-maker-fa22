import React from 'react'
import {randomSet, jsDataTypes} from "../../utils/utils";

export const TransactionsNonRepeatableRead = () => {
    const id = randomSet(20, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = id[18];
    const model = id[17];
    const field1 = id[0], type1 = 'string';//types[0];
    const field2 = id[1], type2 = 'string';//types[1];
    const field3 = id[2], type3 = types[2];
    const field4 = id[3], type4 = types[3];
    const field5 = id[4], type5 = types[4];
    const field6 = id[5], type6 = types[5];
    const field7 = id[6], type7 = types[6];
    const tableA = id[7]
    const tableB = id[8]
    const tableC = id[9]
    const valueStr1 = id[16];
    const valueStr2 = id[19];
    const valueNum1 = Math.round(Math.random() * 100);
    const valueNum2 = Math.round(Math.random() * 100);
    const valueNum3 = Math.round(Math.random() * 100);
    const choices = [
        'Non Repeatable Read',
        'Dirty Read',
        'Read Committed',
        'Repeatable Read',
        'Serializable',
        'Phantom Read',
    ]
    return(
        <div>
            <h1>Transactions Non Repeatable Reads</h1>
            <div id="question123">

                <p>Consider the following schema</p>
                <b>
                    {tableA}({field1} (pk), {field2}, {field3}, {field4} (fk))
                    <br/>
                    {tableB}({field4} (pk), {field5}, {field6}, {field7})
                </b>
                <br/>
                <br/>
                <p> If the initial value of <b>{field2}</b> for a given record
                    is <b>{valueNum2}</b>, what would be the risk of the following sequence of events</p>
                <table border="0">
                    <tbody>
                    <tr>
                        <td align={"center"}><b>TRANSACTION 1</b></td>
                        <td width={50}></td>
                        <td align={"center"}><b>TRANSACTION 2</b></td>
                    </tr>
                    <tr>
                        <td>SELECT {field2} FROM {tableA} WHERE {field3} = {valueNum1};
                            <br/>-- returns {valueNum2}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>UPDATE {tableA} SET {field2} = {valueNum3} WHERE {field3} = {valueNum1};</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>COMMIT;</td>
                    </tr>
                    <tr>
                        <td>SELECT {field2} FROM {tableA} WHERE {field3} = {valueNum1};
                            <br/>-- returns {valueNum3}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>COMMIT;</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>


            </div>
            <div id="answers234">
                <hr/>
                {
                    choices.map((choice) => {
                        return(
                            <>
                            <input size={70}
                                   style={{border: "none"}}
                                   value={choice}/>
                                   <hr/>
                           </>
                        )
                    })
                }
            </div>
        </div>
    )
}
