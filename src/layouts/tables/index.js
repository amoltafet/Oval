// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import SuiInput from "components/SuiInput";

import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import team3 from "assets/images/team-3.jpg";


function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiBox mb={1}>
        <SuiTypography variant="button" fontWeight="medium">
           <SuiInput placeholder="First" />
        </SuiTypography>
        </SuiBox>
        <SuiTypography variant="caption" color="secondary">
          <SuiInput placeholder="Last" />
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Tables() {
  const { columns, rows } = authorsTableData;

  const addTable = {
    columns: [
      { name: "tenant info", align: "left" },
      { name: "email", align: "left" },
      { name: "phone", align: "left" },
      { name: "property", align: "left" },
      { name: "completion", align: "center" },
      { name: "", align: "left" },
    ],
    rows: [
      {
        'tenant info': (
          <Author image={team3} name="John Michael" email="fd" />
        ),
        email: (
          <SuiInput placeholder="Email" />
        ),
        phone: (
          <SuiInput placeholder="Phone" />
        ),
        property: (
          <SuiInput placeholder="Property" />
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
     
      <SuiBox mb={2}>
        <Card>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Add Tenant</SuiTypography>
            </SuiBox>
        <SuiBox sx={{ "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },}}>
                
            <Table columns={addCol} rows={addRow} />
          </SuiBox>
        </Card>
        </SuiBox>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">My Tenants</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
