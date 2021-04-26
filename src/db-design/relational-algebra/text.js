import React from 'react'
import {randomSet, work, education, randomInt} from "../../utils/utils";

const RelationalAlgebraText = () => {
    
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
            <h2>Relational Algebra Text</h2>
            
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
                <b>
                SELECT(PROJECT({student}, {name}), {did}={did10})
                </b>
            </div>
            
            <div id="answers333">
                <br/>
                <br/>

                The query is meaningless, therefore the query returns nothing
                <br/>
                <br/>

                The {name}s of {student}s related to {department} whose {did}={did10}
                <br/>
                <br/>

                The {name}s of {student}s concatenated with the {name}s of {department} whose {did}={did10}
                <br/>
                <br/>

                The inner PROJECT is meaningless, therefore the query just returns the {department} whose {did}={did10}
                <br/>
                <br/>

            </div>
        </div>
    )
}

export default RelationalAlgebraText