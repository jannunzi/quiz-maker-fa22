import React from 'react';

const AssociationHorizontal = (
    {
        left = {
            cardinality: 1,
            decoration: "COMPOSITION"
        },
        right = {
            cardinality: "*"
        }
    }) => {
    return(
        <div style={{width: "70px", position: "relative"}}>
            <span style={{fontSize: "1.5em", paddingLeft: "5px"}}>{left.cardinality}</span>
            <span style={{fontSize: "1.5em", paddingRight: "5px", float: "right"}}>{right.cardinality}</span>
            {/*<div style={{height: "0px", border: "5px solid black"}}>&nbsp;</div>*/}
            {
                left.decoration === "COMPOSITION" &&
                <span style={{fontSize: "3em", position:"absolute", top:"16px", left: "-5px"}}>&#9670;</span>
            }
            {
                left.decoration === "AGGREGATION" &&
                <>
                    {/*<span style={{fontSize: "3.3em", position:"absolute", top:"8px", left: "-6px"}}>&#9670;</span>*/}
                    <span style={{fontSize: "2.5em", position:"absolute", top:"26px", left: "-5px", color: "white", textShadow: "0 0 5px black"}}>&#11045;</span>
                </>
            }
            {
                left.decoration === "INHERITANCE" &&
                <>
                    <span style={{fontSize: "2.5em", position:"absolute", top:"26px", left: "-1px", color: "white", textShadow: "0 0 5px black"}}>&#9664;</span>
                </>
            }
            <hr style={{height: "2px", "backgroundColor": "#000000", "border": "none"}}/>
            {
                right.decoration === "COMPOSITION" &&
                <span style={{fontSize: "3em", position:"absolute", top:"16px", right: "-5px"}}>&#9670;</span>
            }
            {
                right.decoration === "AGGREGATION" &&
                <>
                    <span style={{fontSize: "2.5em", position:"absolute", top:"26px", right: "-5px", color: "white", textShadow: "0 0 5px black"}}>&#11045;</span>
                </>
            }
            {
                right.decoration === "INHERITANCE" &&
                <span style={{fontSize: "2.5em", position:"absolute", top:"26px", right: "-5px", color: "white", textShadow: "0 0 5px black"}}>&#9655;</span>
            }
        </div>
    )    
}

export default AssociationHorizontal