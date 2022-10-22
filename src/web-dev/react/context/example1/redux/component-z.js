import React from 'react'
import {connect} from 'react-redux'

const ComponentZ = ({dataForZ}) => {
    return(
        <div>
            <h1>Component Z</h1>
            <h2>{dataForZ}</h2>
        </div>
    )
}
const stpm = (state) => ({
    dataForZ: state.dataForZ
})
export default connect(stpm)(ComponentZ);