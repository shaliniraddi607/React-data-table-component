// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import DataTable from 'react-data-table-component';

function App() {
const columns = [
  {
      name:'Name',
      selector: row =>row.name,
      sortable:true
      // sortable mens errow mark up n down shown in browser result will be go in reverse
  },
  {
      name: "Email",
      selector: row =>row.email,
      sortable:true
  },
  {
      name:"Age",
      selector: row => row.age,
      sortable:true
  }
  
];
const data = [
  {
    id:1,
    name:'shalini',
    email: 'shalu@gmail.com',
    age: 29
  },
  {
    id:2,
    name:'raj',
    email: 'raj@gmail.com',
    age: 30
  },
  {
    id:3,
    name:'mahi',
    email: 'mahi@gmail.com',
    age: 31
  },
  {
    id:4,
    name:'vansh',
    email:'vansh@gmail.com',
    age: 32
  },
  {
    id:5,
    name:'raksha',
    email:'raksha@gmail.com',
    age: 33
  },
  {
    id:3,
    name:'mahi',
    email: 'mahi@gmail.com',
    age: 31
  },
  {
    id:4,
    name:'vansh',
    email:'vansh@gmail.com',
    age: 32
  },
  {
    id:5,
    name:'raksha',
    email:'raksha@gmail.com',
    age: 33
  },
  
  
]
const [records,setRecords] = useState(data);

function handleFilter(event) {
  const newData = data.filter(row => {
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
}

  return (
    <div className='container mt-5'>
      <div className='text-end'><input type="text" onChange={handleFilter} /> </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        // it means write mark box will be  appear in each rows in the browser
      fixedHeader
      // here header is fixed means id, mail,age that 1st line will be fixed 
      pagination
      // means next page n back page
      ></DataTable>

     
    </div>
  );
}

export default App;
