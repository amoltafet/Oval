import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import Link from "@mui/material/Link";

import { getAuth } from "firebase/auth";
import { collection, getDoc, getFirestore, doc, onSnapshot } from "firebase/firestore"; 
import { getApp } from "firebase/app";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";

function AddCard() {
  const [address, setAddress] = useState("");
  return (
    <Card>
      <SuiBox pt={2} px={2}>
        <SuiBox mb={0.5}>
          <SuiTypography variant="h6" fontWeight="medium">
                Add New Property
          </SuiTypography>
          </SuiBox>
            <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput type="text" placeholder="Address"/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="number" placeholder="Bed"/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="number" placeholder="Bath"/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="text" placeholder="Garage"/>
            </SuiBox>
          </SuiBox>
        <SuiBox mb={2}>
          <SuiButton variant="contained" color="primary">
            Add Property Images
          </SuiButton>
        </SuiBox>   
      </SuiBox>
      <SuiBox mb={2}>
        <SuiBox mb={2}>
          <SuiButton variant="contained" color="primary">
           Cancel
          </SuiButton>
        </SuiBox>
        <SuiBox mb={2}>
          <SuiButton variant="contained" color="primary">
            Add Property
          </SuiButton>
        </SuiBox>
      </SuiBox>   
    </Card>
  );
}


export default AddCard;