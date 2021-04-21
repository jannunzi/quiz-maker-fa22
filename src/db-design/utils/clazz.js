import React from 'react';

const Clazz = (
    {
        clazzName="Employee",
        fields=[
            {name:"id"},
            {name:"firstName", type: "String"},
            {name:"lastName"},
        ]
    }) => {
    return (
        <table style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "black"
        }}>
            <thead style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black"
            }}>
            <tr>
                <th style={{textTransform: "uppercase", textAlign: "center", paddingLeft: "5px", paddingRight: "5px"}}>
                    {clazzName}
                </th>
            </tr>
            </thead>
            <tbody>
            {
                fields.map(field =>
                    <tr>
                        <td style={{paddingLeft: "5px", paddingRight: "5px"}}>
                            {field.name}
                            {
                                field.pk ? ' (pk)':''
                            }
                            {
                                field.fk ? ' (fk)':''
                            }
                            {
                                field.type ?
                                    ' : ':''
                            }
                            {field.type}
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default Clazz