/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";
import { useState } from "react";
import React from "react";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";
import Table from "examples/Tables/Table";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

function ProjectsTableData() {
  const anchorRef = React.useRef(null);
  const [menu, setMenu] = useState(null);
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  
  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={anchorRef}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );
  
  const action = (
  <>
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
    more_vert
  </Icon>
  {renderMenu}
</>
);
  const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "property", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      property: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          123 E Street, New York, NY 10001
        </SuiTypography>
      ),
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};
  const { columns: prCols, rows: prRows } = projectsTableData;
  return (
    <SuiBox
    sx={{
      "& .MuiTableRow-root:not(:last-child)": {
        "& td": {
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        },
      },
    }}>
    <Table columns={prCols} rows={prRows} />
  </SuiBox>
  );
}
export default ProjectsTableData;
