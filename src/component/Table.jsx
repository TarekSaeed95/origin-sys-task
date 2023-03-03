import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { GridToolbar } from "@mui/x-data-grid";
import fetchUsersHook from "../utils/Hooks/fetchUsersHook";
import { DataGridPremium, useGridApiRef } from "@mui/x-data-grid-premium";
import ErrorComponent from "./ErrorComponent";
import { selectHandler } from "../utils/selectHandler";
import {
  columns,
  groupingColDef,
  initialState,
  style,
} from "../utils/columnDefintion";
//component
export default function Table() {
  const apiRef = useGridApiRef();
  // states inintialization
  const [pageSize, setPageSize] = useState(5);
  const [rowsSelected, setRowsSelected] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  // delete--Rows--Handler
  const deleteHandler = (rows) => {
    setDeletedRows((prev) => {
      return [...prev, ...usersData.filter((user) => rows.includes(user.id))];
    });
    setRowsSelected([]);
  };
  // call fetchHook to getdata
  const { usersData, loading, error } = fetchUsersHook(10);
  // handling error
  if (error) {
    return <ErrorComponent error={error} />;
  }
  // component return
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" sx={{ mb: 1, justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteHandler(rowsSelected)}
        >
          Remove a row
        </Button>
      </Stack>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <DataGridPremium
          //import definitions and styles
          columns={columns}
          groupingColDef={groupingColDef}
          sx={style}
          initialState={initialState(apiRef)}
          getRowSpacing={(el) => ({
            top: el.isFirstVisible ? 0 : 5,
            bottom: el.isLastVisible ? 0 : 5,
          })}
          autoHeight
          rowsPerPageOptions={[5, 10, 20]}
          //get data
          rows={usersData.filter((user) => !deletedRows.includes(user))}
          loading={loading}
          //features
          checkboxSelection
          disableSelectionOnClick
          pagination
          components={{ Toolbar: GridToolbar }}
          //handlers and states
          apiRef={apiRef}
          selectionModel={rowsSelected}
          onSelectionModelChange={(target) => {
            selectHandler(target, setRowsSelected, rowsSelected, apiRef);
          }}
          pageSize={pageSize}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
        />
      </div>
    </Box>
  );
}
