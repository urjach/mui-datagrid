import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const MyDataGrid = () => {
  const columns = [
    { field: "id", headerName: "S.No." },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={5} />
    </div>
  );
};

export default MyDataGrid;
