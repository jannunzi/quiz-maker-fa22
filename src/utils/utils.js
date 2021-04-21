export const groupByCount =
  ({
    tableA, tableB,
    groupByField,
    renameA, renameB,
    countField,
    project
   }) => {
    const groupByFieldIndexA = tableA.schema.columns.findIndex(column => column.name === groupByField)
    const groupByFieldIndexB = tableB.schema.columns.findIndex(column => column.name === groupByField)

    console.log(groupByFieldIndexA)
    console.log(groupByFieldIndexB)

    const count = {}
    for(let a=0; a<tableA.data.length; a++) {
      const rowA = tableA.data[a]
      const groupByFieldValueA = rowA[groupByFieldIndexA]
      for (let b = 0; b < tableB.data.length; b++) {
        const rowB = tableB.data[b]
        const groupByFieldValueB = rowB[groupByFieldIndexB]
        if(groupByFieldValueA === groupByFieldValueB) {
          if(typeof count[groupByFieldValueA] === 'undefined') {
            count[groupByFieldValueA] = 0
          }
          count[groupByFieldValueA]++
        }
      }
    }
    let countTable = []
    Object.keys(count).forEach(key => {
      console.log(key)
      const row = [parseInt(key), count[key]]
      countTable.push(row)
    })
    console.log(countTable)
    const resultTable = {
      schema: {
        tableName: "Result Grid",
        // rowColors: ["#bbffbb","#bbbbff", "#ffbbbb"],
        columns: [
          {name: renameA, type: 'INT'},
          {name: renameB, type: 'INT'}
        ]
      },
      tableData: countTable
    }
    return resultTable
}
export const join = (
  {
    tableA, tableB,
    joinFieldA, joinFieldB,
    project
}) => {
  let result = []
  const joinFieldAindex = tableA.schema.columns.findIndex(column => column.name === joinFieldA)
  const joinFieldBindex = tableB.schema.columns.findIndex(column => column.name === joinFieldB)
  const projectFieldIndices = project.map(p => {
    const table = p.table === tableA.schema.tableName ? tableA : tableB
    const index = table.schema.columns.findIndex(column => column.name === p.field)
    return {
      table: p.table,
      fieldIndex: index
    }
  })
  for(let a=0; a<tableA.data.length; a++) {
    const rowA = tableA.data[a]
    for(let b=0; b<tableB.data.length; b++) {
      const rowB = tableB.data[b]
      const joinFieldAvalue = rowA[joinFieldAindex]
      const joinFieldBvalue = rowB[joinFieldBindex]
      if(joinFieldAvalue === joinFieldBvalue) {
        const r = {}
        r[tableA.schema.tableName] = rowA
        r[tableB.schema.tableName] = rowB
        result.push(r)
      }
    }
  }
  let resultJoined = []
  for(let r=0; r<result.length;r++) {
    let resultRowJoined = []
    for(let p=0; p<projectFieldIndices.length; p++) {
      const table = projectFieldIndices[p].table;
      const index = projectFieldIndices[p].fieldIndex;
      resultRowJoined[p] = result[r][table][index]
    }
    resultJoined.push(resultRowJoined)
  }
  const schemaProjected = {...tableA.schema}
  const columnsFromA = tableA.schema.columns.filter(column => project.findIndex(p => p.field === column.name) >= 0)
  const columnsFromB = tableB.schema.columns.filter(column => project.findIndex(p => p.field === column.name) >= 0)
  schemaProjected.columns = [...columnsFromA, ...columnsFromB]
  schemaProjected.tableName = 'Result Grid'
  const resultTable = {
    schema: schemaProjected,
    tableData: resultJoined
  }
  return resultTable
}

export const randomData =
  ({
     schema,
     rowCount,
     values
   }) =>
{
  let tableData = []
  for(let row=0; row<rowCount; row++) {
    let rowData = []
    for(let col=0; col<schema.columns.length; col++) {
      const columnName = schema.columns[col].name
      if(values && values[columnName]) {
        rowData[col] = null
        if(values[columnName] && values[columnName][row]) {
          rowData[col] = values[columnName][row]
        }
      } else {
        const columnType = schema.columns[col].type
        if(columnType === 'INT') {
          rowData[col] = randomInt(10000)
        } else if(columnType === 'VARCHAR') {
          rowData[col] = randomString(5)
        } else if(columnType === 'FLOAT') {
          rowData[col] = randomFloat(10000, 2)
        }
      }
    }
    tableData.push(rowData)
  }
  return tableData
}


export const randomIntArray = (size=5, range=100, offset=10) => {
    const integers = [];
    let count = 0;
    while(count < size) {
        let integer = randomInt(range, offset)
        const index = integers.indexOf(integer)
        if(index < 0) {
            integers.push(integer)
            count++;
        }
    }
    return integers
}

export const randomArrayOfStrings = (stringSize=2, howManyStrings=20, capitalize=false) => {
    const strings = [];
    let count = 0;
    while(count < howManyStrings) {
        let ztring = randomStringCapitalized(stringSize)
        ztring = capitalize ? ztring : ztring.toLowerCase()
        const index = strings.indexOf(ztring)
        if(index < 0) {
            strings.push(ztring)
            count++;
        }
    }
    return strings
}

export const randomStringCapitalized = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const randomString = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const randomWordSet = (count) => {
    
}

export const randomInt = (range, offset=0) => offset + Math.round(Math.random() * range)
export const randomFloat = (range, digits, offset=0) => offset + (Math.random() * range).toFixed(digits)


export const randomFruitSet = (count) => {
    let c = 0;
    let s = [];
    while (c < count && c < fruits.length) {
        const index = randomInt(count)
        const randomFruit = fruits[index]
        const alreadyPicked = s.findIndex(f => randomFruit === f) >= 0
        if(!alreadyPicked) {
            s.push(randomFruit)
            c++
        }
    }
    return s;
}

export const randomSet = (count, array, capitalized = false) => {
    if(!array) {
        array = allArrays
    }
    let c = 0;
    let s = [];
    while (c < count && c < array.length) {
        const index = randomInt(array.length)
        const randomFruit = array[index]
        const alreadyPicked = s.findIndex(f => randomFruit === f) >= 0
        if(randomFruit && !alreadyPicked) {
            s.push(
                capitalized ? randomFruit.toUpperCase() : randomFruit.toLowerCase()
            )
            // s.push(randomFruit)
            c++
        }
    }
    return s;
}

export const randomArray = () => {
    const index = randomInt(2)
    return arrays[index]
}

export const randomArrayElement = (array) => {
    if(!array) {
        array = allArrays
    }
    const index = randomInt(array.length)
    return array[index]
}

export const work = [
    "project",
    "employee",
    "stakeholder",
    "task",
    "job",
    "chart",
    "dead_line",
    "due_date",
    "workload",
    "issue",
    "step",
    "sub_task",
    "deliverable",
    "assignee",
    "engineer",
    "business_analyst",
    "version",
    "revision",
    "criteria"
]

export const destinations = [
    "Rome",
    "Paris",
    "Miami",
    "Austin",
    "Dallas",
    "Boston",
    "Cairo",
    "Sidney"
]

export const fruits = [
    "banana",
    "orange",
    "grape",
    "mango",
    "pineapple",
    "apple",
    "carrot",
    "apricots",
    "avocado",
    "strawberry",
    "blackberries",
    "blueberries"
];

export const education = [
    "tuition",
    "graduation",
    "school",
    "department",
    "grade",
    "section",
    "teacher",
    "professor",
    "student",
    "topic",
    "home_work",
    "due_date",
    "quiz",
    "exam",
    "training",
    "curriculum"
]

export const aggregationFunctions = [
    "COUNT",
    "AVG",
    "MAX",
    "MIN"
]

export const jsDataTypes = [
    "String",
    "Number",
    "Date"
]

export const arrays = [
    fruits,
    work,
    education
]

export const allArrays = [
    ...fruits,
    ...work,
    ...education
]