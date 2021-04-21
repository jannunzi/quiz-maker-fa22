import React from 'react'

const Table =
  ({
    schema,
    tableData
  }) => {
    return (
      <table className="table table-sm table-bordered" style={{width: "auto"}}>
        <thead>
          <tr>
            <th
              style={{'textAlign' : 'center'}}
              colSpan={schema.columns.length}>
              {schema.tableName}
            </th>
          </tr>
          <tr>
            {
              schema.columns.map((column, ndx) =>
                <th key={ndx}>
                  {column.name}
                  {column.primaryKey ? ' (pk)':''}
                  {column.foreignKey ? ' (fk)':''}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
        {
          tableData.map((rowData, ndx) =>
            <tr key={ndx} style={{backgroundColor: schema.rowColors && schema.rowColors[ndx] ? schema.rowColors[ndx] : 'white'}}>
              {
                rowData.map((colData, ndx) =>
                  <td key={ndx}>{
                    colData === null ? 'NULL' : colData
                  }</td>
                )
              }
            </tr>
          )
        }
        </tbody>
      </table>
    )
  }
export default Table
