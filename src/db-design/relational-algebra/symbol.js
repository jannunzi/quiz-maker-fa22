import React from 'react'
import {randomSet, work, education, randomInt} from "../../utils/utils";

const RelationalAlgebraSymbol = () => {
    
    const randomStrings = randomSet(10, work, true)
    const randomStrings2 = randomSet(10, education, false)

    const student = randomStrings[0]
    const department = randomStrings[1]
    
    const sid = randomStrings2[0]
    const name = randomStrings2[1]
    const grad_year = randomStrings2[2]
    const did = randomStrings2[3]
    const dname = randomStrings2[3]
    
    const year = randomInt(50) + 2020
    const did10 = randomInt(10) + 10
    
    return(
        <div>
            <h2>Relational Algebra Symbol</h2>
            
            <div id="question333">
                
                Consider the following schema:
                <br/>
                <br/>
                <b>
                {student}({sid}, {name}, {grad_year}, {did})
                <br/>
                {department}({did}, {name})
                </b>
                <br/>
                <br/>
                What does the following expression mean?
                <br/>
                <br/>
                <table style={{fontSize: "1.5em"}}>
                    <tr>
                        <td>π</td>
                        <td><sub>{name}</sub></td>
                        <td>(σ</td>
                        <td><sub>{did}={did10}^{grad_year}={year}</sub></td>
                        <td>({student}))</td>
                    </tr>
                </table>
            </div>
            
            <div id="answers333">
                <br/>
                <br/>

                Retrieve {student}'s {name}s from records in {student}s related to {did}={did10} and {grad_year} is {year}
                <br/>
                <br/>

                Retrieve {student}'s {name}s from records in {student}s related to {did}={did10} or {grad_year} is {year}
                <br/>
                <br/>

                Retrieve {department}'s {name}s from records in {student}s related to {did}={did10} and {grad_year} is {year}
                <br/>
                <br/>

                Retrieve {department}'s {name}s from records in {student}s related to {did}={did10} or {grad_year} is {year}
                
                
            </div>
        </div>
    )
}

export default RelationalAlgebraSymbol