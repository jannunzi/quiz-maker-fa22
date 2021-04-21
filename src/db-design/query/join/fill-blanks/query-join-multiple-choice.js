import React from 'react'
import CreateTableSql from "../../../sql/create-table";
import InsertRandomRowsSql from "../../../sql/insert-random-rows";
import Table from "../../../tables/table";
import {randomStringCapitalized, randomInt, randomData, join} from "../../../../utils/utils";

const DbDesignQueryJoinMultipleChoice = () => {
  const randomTableNameA = randomStringCapitalized(2);
  const randomTableNameB = randomStringCapitalized(2);

  const randomRenameA = randomStringCapitalized(2);
  const randomRenameB = randomStringCapitalized(2);
  const randomRenamea = randomStringCapitalized(2);
  const randomRenameb = randomStringCapitalized(2);

  const schemaA = {
    schemaName: 'QUIZ_MAKER',
    tableName: randomTableNameA,
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
  values[`${randomTableNameA}ID`] = [randomPk1, randomPk2, randomPk3, randomPk4, randomPk5]
  let tableDataA = randomData({
    schema: schemaA,
    values,
    rowCount: 5
  })
  values = {}
  values[`${randomTableNameA}ID`] = [randomPk1, randomPk1, randomPk2, randomPk2]
  let tableDataB = randomData({
    schema: schemaB,
    values,
    rowCount: 5
  })
  const joinedTable = join({
    tableA: {data: tableDataA, schema: schemaA},
    tableB: {data: tableDataB, schema: schemaB},
    joinFieldA: `${randomTableNameA}ID`,
    joinFieldB: `${randomTableNameA}ID`,
    project: [
      {table: randomTableNameA, field: `${randomTableNameA}1`},
      {table: randomTableNameB, field: `${randomTableNameB}1`},
      ]
  })
  console.log(joinedTable)
  return (
    <>
      <h2>DB Design Query Join Multiple Choice</h2>
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
        <p>Which of the queries below produces the following output?</p>
        <Table schema={joinedTable.schema} tableData={joinedTable.tableData}/>
        <hr/>
      </div>
      <div id="answers">
        <div>
          <input type="radio"/>
          <br/>
          SELECT {randomRenameA}.{randomTableNameA}1, {randomRenameB}.{randomTableNameB}1<br/>
          FROM {randomTableNameA} {randomRenameA}, {randomTableNameB} {randomRenameB}<br/>
          WHERE {randomRenameA}.{randomTableNameA}ID = {randomRenameB}.{randomTableNameA}ID;
          <hr/>
        </div>
        <div>
          <input type="radio"/>
          <br/>
          SELECT {randomTableNameA}1, {randomTableNameB}1<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameB}ID;
        </div>
        <div>
          <hr/>
          <input type="radio"/>
          <br/>
          SELECT {randomRenamea}.{randomTableNameA}1, {randomRenameb}.{randomTableNameB}1<br/>
          FROM {randomTableNameA} {randomRenamea}, {randomTableNameB} {randomRenameb}<br/>
          WHERE {randomRenamea} = {randomRenameb}.{randomTableNameA}ID;
          <hr/>
        </div>
        <div>
          <input type="radio"/>
          <br/>
          SELECT *<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameB}ID;
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <CreateTableSql schema={schemaA}/>
          <InsertRandomRowsSql schema={schemaA} tableData={tableDataA}/>
          <CreateTableSql schema={schemaB}/>
          <InsertRandomRowsSql schema={schemaB} tableData={tableDataB}/>
          <br/>
          -- retrieve all records from left table<br/>
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
          SELECT {randomRenameA}.{randomTableNameA}1, {randomRenameB}.{randomTableNameB}1<br/>
          FROM {randomTableNameA} {randomRenameA}, {randomTableNameB} {randomRenameB}<br/>
          WHERE {randomRenameA}.{randomTableNameA}ID = {randomRenameB}.{randomTableNameA}ID;
          <br/>
          <br/>
          -- incorrect answer 1<br/>
          SELECT {randomTableNameA}1, {randomTableNameB}1<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameB}ID;
          <br/>
          <br/>
          -- incorrect answer 2<br/>
          SELECT {randomRenamea}.{randomTableNameA}1, {randomRenameb}.{randomTableNameB}1<br/>
          FROM {randomTableNameA} {randomRenamea}, {randomTableNameB} {randomRenameb}<br/>
          WHERE {randomRenamea} = {randomRenameb}.{randomTableNameA}ID;
          <br/>
          <br/>
          -- incorrect answer 3<br/>
          SELECT *<br/>
          FROM {randomTableNameA}, {randomTableNameB}<br/>
          WHERE {randomTableNameA}.{randomTableNameA}ID = {randomTableNameB}.{randomTableNameB}ID;
        </div>
        <div className="col-6">
        </div>
      </div>

    </>
  )
}

export default DbDesignQueryJoinMultipleChoice
