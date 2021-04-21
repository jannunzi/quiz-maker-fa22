import React from 'react'

const CreateTableSql =
  ({
     schema = {
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
    <>
      USE {schema.schemaName};
      <br/>
      DROP TABLE IF EXISTS {schema.tableName};
      <br/>
      CREATE TABLE {schema.tableName} (<br/>
      {
        schema.columns.map((column, ndx) => (
          <div key={ndx} style={{paddingLeft: '10px'}}>
            <span>
              {column.name}
              &nbsp;{column.type}
              {column.size ? `(${column.size})`:''}
              {column.notNull ? <span> NOT NULL</span>:''}
              {column.autoIncrement ? <span> AUTO_INCREMENT</span>:''}
              {ndx < schema.columns.length - 1 ? ',': ''}
            </span>
            {column.primaryKey ? <div>
              PRIMARY KEY({column.name})
              {ndx < schema.columns.length - 1 ? ',': ''}
            </div> : ''}
          </div>
          ))
      }
      );
    </>
  )
}

export default CreateTableSql
