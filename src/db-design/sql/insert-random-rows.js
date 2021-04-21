import React from 'react'
// import {randomString, randomInt, randomFloat, randomData} from "../../utils/utils";

const InsertRandomRowsSql =
  ({
     tableData,
     schema = {
       schemaName: 'QUIZ_MAKER',
       tableName: 'A',
       columns: [
         {
           name: 'AID',
           type: 'INT',
           primaryKey: true,
           autoIncrement: true,
           notNull: true
         },
         {
           name: 'A1',
           type: 'VARCHAR',
           size: 45
         },
         {
           name: 'A2',
           type: 'INT'
         },
         {
           name: 'A3',
           type: 'FLOAT'
         }
       ]
     }
  }) => {
  return(
    <div>
      USE {schema.schemaName};
      <br/>
      {
        tableData.map((data, ndx) =>
          <div key={ndx}>
            INSERT INTO {schema.tableName}
            <div>
            ({
              schema.columns.map((column, ndx) =>
                <span key={ndx}>
                  {column.name}
                  {ndx < schema.columns.length-1 ? ',': ''}
                </span>
              )
            })
            </div>
            <div>
            VALUES
              (
              {data.map((d, ndx) =>
                <span key={ndx}>
                  {d === null ? 'null' : "'"+d+"'"}
                  {ndx < schema.columns.length-1 ? ',': ''}
                </span>
              )}
              );
            </div>
          </div>
        )
      }
    </div>
  )
}

export default InsertRandomRowsSql
