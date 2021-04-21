import React from 'react'
import CreateTableSql from "../../../sql/create-table";
import InsertRandomRowsSql from "../../../sql/insert-random-rows";
import Table from "../../../tables/table";
import {randomStringCapitalized, randomInt, randomData, join, groupByCount} from "../../../../utils/utils";

const DbDesignQueryGroupByCountFillBlanks = () => {
  const randomTableNameA = randomStringCapitalized(2);
  const randomTableNameB = randomStringCapitalized(2);

  const randomRenameA = randomStringCapitalized(2);
  const randomRenameB = randomStringCapitalized(2);
  const randomRenamea = randomStringCapitalized(2);
  const randomRenameb = randomStringCapitalized(2);

  const schemaA = {
    schemaName: 'QUIZ_MAKER',
    tableName: randomTableNameA,
    rowColors: ["#bbffbb","#bbbbff", "#ffbbbb"],
    columns: [
      {
        name: `${randomTableNameA}ID`,
        type: 'INT',
        primaryKey: true,
        autoIncrement: true,
        notNull: true
      },
      {
        name: `${randomTableNameA}1`,
        type: 'VARCHAR',
        size: 45
      },
      {
        name: `${randomTableNameA}2`,
        type: 'INT'
      },
      {
        name: `${randomTableNameA}3`,
        type: 'FLOAT'
      }
    ]
  }
  const schemaB = {
    schemaName: 'QUIZ_MAKER',
    tableName: randomTableNameB,
    rowColors: ["#bbffbb","#bbbbff","#bbbbff","#ffbbbb","#ffbbbb","#ffbbbb"],
    columns: [
      {
        name: `${randomTableNameB}ID`,
        type: 'INT',
        primaryKey: true,
        autoIncrement: true,
        notNull: true
      },
      {
        name: `${randomTableNameB}1`,
        type: 'VARCHAR',
        size: 45
      },
      {
        name: `${randomTableNameB}2`,
        type: 'INT'
      },
      {
        name: `${randomTableNameB}3`,
        type: 'FLOAT'
      },
      {
        name: `${randomTableNameA}ID`,
        type: 'INT',
        foreignKey: true,
        referencesTable: randomTableNameA,
        referencesField: `${randomTableNameA}ID`
      }
    ]
  }
  const randomPk1 = randomInt(1000)
  const randomPk2 = randomInt(1000)
  const randomPk3 = randomInt(1000)
  const randomPk4 = randomInt(1000)
  const randomPk5 = randomInt(1000)
  let values = {}
  values[`${randomTableNameA}ID`] = [randomPk1, randomPk2, randomPk3, randomPk4, randomPk5, randomInt(1000),randomInt(1000)]
  let tableDataA = randomData({
    schema: schemaA,
    values,
    rowCount: 7
  })
  values = {}
  values[`${randomTableNameA}ID`] = [randomPk1, randomPk2, randomPk2, randomPk3, randomPk3, randomPk3, randomInt(1000)]
  const rowColors = ["#bbffbb","#bbbbff", "#ffbbbb"]
  let tableDataB = randomData({
    schema: schemaB,
    values,
    rowCount: 7
  })
  const group = groupByCount({
    tableA: {data: tableDataA, schema: schemaA},
    tableB: {data: tableDataB, schema: schemaB},
    groupByField: `${randomTableNameA}ID`,
    renameA: randomRenameA,
    renameB: randomRenameB
  })
  // console.log(group)
  return (
    <>
      <h2>DB Design Query Group By Count Fill Blanks</h2>
      <h3>GROUP_BY_COUNT_FILL_BLANKS_</h3>
      <div id="question">
        <p>Consider the following data for tables {randomTableNameA} and {randomTableNameB}</p>
        <table style={{width: "100%"}}>
          <tbody>
          <tr>
            <td>
              <Table schema={schemaA} tableData={tableDataA}/>
            </td>
            <td>
              <Table schema={schemaB} tableData={tableDataB}/>
            </td>
          </tr>
          </tbody>
        </table>
        <p>Fill in the blanks below to produce the following output</p>
        <Table schema={group.schema} tableData={group.tableData}/>
        <hr/>
        <div style={{wordSpacing: "20px", fontSize: "1.2em", fontWeight: "bold"}}>
          SELECT {randomTableNameB}.[{randomTableNameA}ID_1] AS {randomRenameA},<br/>
          [COUNT]([{randomTableNameA}_2].[{randomTableNameA}ID_3]) AS [{randomRenameB}_4]<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameA}ID<br/>
          [GROUP] [BY] [{randomTableNameA}_5].[{randomTableNameA}ID_6];<br/>
          <hr/>
        </div>
      </div>
      <div id="answers">
      </div>
      <div className="row">
        <div className="col-6">
          <br/>-- create table {randomTableNameA}<br/>
          <CreateTableSql schema={schemaA}/>
          <br/>-- insert into {randomTableNameA}<br/>
          <InsertRandomRowsSql schema={schemaA} tableData={tableDataA}/>
          <br/>-- create table {randomTableNameB}<br/>
          <CreateTableSql schema={schemaB}/>
          <br/>-- insert into {randomTableNameB}<br/>
          <InsertRandomRowsSql schema={schemaB} tableData={tableDataB}/>
          <br/>-- retrieve all records from left table<br/>
          SELECT *<br/>
          FROM {randomTableNameA};
          <br/>
          <br/>
          -- retrieve all records from right table<br/>
          SELECT *<br/>
          FROM {randomTableNameB};
          <br/>
          <br/>
          -- correct answer<br/>
          SELECT {randomTableNameB}.{randomTableNameA}ID AS {randomRenameA},<br/>
          COUNT({randomTableNameA}.{randomTableNameA}ID) AS {randomRenameB}<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameA}ID<br/>
          GROUP BY {randomTableNameA}.{randomTableNameA}ID;<br/>
          <br/>
          -- drop tables<br/>
          DROP TABLE {randomTableNameA};<br/>
          DROP TABLE {randomTableNameB};<br/>

        </div>
        <div className="col-6">
        </div>
      </div>

    </>
  )
}

export default DbDesignQueryGroupByCountFillBlanks
