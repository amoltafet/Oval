import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import ProjectsTableData from "./projectsTableData";
// import icon from material-ui/icons/AddCircleOutline;
import SuiInput from "components/SuiInput";

import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Maintenance() {
  
  const addTable = {
    columns: [
      { name: "project", align: "left" },
      { name: "budget", align: "left" },
      { name: "status", align: "left" },
      { name: "property", align: "left" },
      { name: "completion", align: "center" },
      { name: "", align: "center" },
    ],
    rows: [
      {
        project: (
          <SuiBox sx={{ display: "flex", alignItems: "center" }}>
            <SuiBox p={2}>
               <ArrowCircleRightRoundedIcon fontSize="large"/>
            </SuiBox>
            <SuiBox>
            
            <SuiInput placeholder="Project" />
            </SuiBox>
          </SuiBox>
        ),
        property: (
          <SuiInput placeholder="Property" />
        ),
        budget: (
          <SuiInput placeholder="Budget" />
        ),
        status: (
          <SuiInput placeholder="Status" />
        ),
        completion: (
          <SuiInput placeholder="Completion" />
        ),
        "": (
          <AddCircleRoundedIcon fontSize="large"/>
        ),
      },
    ]
  };

  const { columns: addCol, rows: addRow } = addTable; 

  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox py={2}>
        <SuiBox sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },}}>
            <Table columns={addCol} rows={addRow} />
          </SuiBox>
        </SuiBox>
        <Card>
          <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SuiTypography variant="h6">Maintenance</SuiTypography>
          </SuiBox>
          
          <ProjectsTableData />
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Maintenance;
