import { Avatar } from "@mui/material";
import {
  gridClasses,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { grey } from "@mui/material/colors";
// columns definintion
export const columns = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    flex: 1,
    align: "center",
    headerClassName: "text-lg",
  },
  {
    field: "name",
    headerName: "Full name",
    headerAlign: "center",
    flex: 1,
    align: "center",
    headerClassName: "text-lg",
    minWidth:200
  },
  {
    field: "image",
    headerName: "Avatar",
    headerAlign: "center",
    flex: 1,
    align: "center",
    headerClassName: "text-lg",
    filterable:false,
    sortable:false,
    minWidth:200,
    renderCell: (avatar) => {
      if (avatar.row.image) {
        return <Avatar src={avatar.row.image} />;
      }
    },
  },
  {
    field: "gender",
    headerName: "Gender",
    headerAlign: "center",
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Male", "Female", "Unknown"],
    align: "center",
    headerClassName: "text-lg",
    minWidth:200
  },
  {
    field: "role",
    headerName: "Role",
    headerAlign: "center",
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["admin", "employee"],
    align: "center",
    headerClassName: "text-lg",
    minWidth:200
  },
  {
    field: "address",
    headerName: "Address",
    headerAlign: "center",
    headerClassName: "text-lg",
  },
];
//table styling
export const style = {
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
  [`& .${gridClasses.row}`]: {
    bgcolor: (theme) =>
      theme.palette.mode === "light" ? grey["100"] : grey["800"],
    fontWeight: "bold",
  },
};
//grouping
export const groupingColDef = {
  headerName: "Address",
  headerAlign: "center",
  headerClassName: "text-lg",
  width:300
};
export const initialState = (apiRef) =>
  useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["address"],
      },
    },
  });
