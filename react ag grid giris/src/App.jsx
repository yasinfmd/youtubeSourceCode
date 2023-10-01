
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
function App() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const columnDefs=[
   {
    headerName:'Bu Bir Grup Başlığı',
    children:[
      {
        headerName:'Makeeeeee',
        field:'make',
        type:'numberColumn',
        filter:'agTextColumnFilter',


      },
      {
        field:'model',
        type:'nonEditableColumn'
      },
      {
        field:'price',
        editable:true,
        filter:'agDateColumnFilter',
        type:'dateColumn'


      }
    ]
   },
  ]
  const defaultColDef={
    width:200,
    editable:false,
    resizable:true,
    cellDateType:false,
    floatingFilter:true
  }
  const dateComporator=(date,field)=>{
      debugger
      return -1
      return 1
      return 0
  }

  const customComparator=(date,f)=>{
    debugger
  }
  return (
    <>
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact 
      defaultColDef={defaultColDef}
      columnDefs={columnDefs}
      className="className"
      columnTypes={
        {
          numberColumn: { width: 200, filter: 'agNumberColumnFilter', filterParams:{comparator:customComparator}, },
          dateColumn:{
              filter:'agDateColumnFilter',
              filterParams:{comparator:dateComporator},
              suppressMenu:true,
              suppressMovable:false,
          }
        }
      }
      rowData={rowData}></AgGridReact>
      </div>
    </>
  )
}

export default App
