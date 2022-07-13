import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import Link from "@mui/material/Link";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { getAuth } from "firebase/auth";
import { collection, getDoc, getFirestore, doc, onSnapshot } from "firebase/firestore"; 
import { getApp } from "firebase/app";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";

function Properties() {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [showPropertyListView, setShowPropertyListView] = useState(true);

    useEffect(() => {
       const auth = getAuth();
       const app = getApp();
       const db = getFirestore(app);
       // users - documents - properties 
       const propertiesRef = collection(db, "users");
       const userRef = doc(propertiesRef, auth.currentUser.uid);
       const propRef = collection(userRef, "properties");
       const propSnapshot = onSnapshot(propRef, (snapshot) => {
        const properties = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }
            );
            setProperties(properties);
            console.log(properties);
        }
        );
    }, []);

    const handleShowCard = () => { setShowCard(!showCard); }
    const handleShowPropertyListView = () => { setShowPropertyListView(!showPropertyListView); }

    const PropertyListView = () => (
        <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                My Properties
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                Here you can manage your properties.
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
                {properties.map(property => (
                    <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={homeDecor1}
                      label={property.price}
                      title={property.title}
                      description="As Uber works through a huge amount of internal management turmoil."
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "view property",
                      }}
                      authors={[
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                      ]}
                    />
                  </Grid>
                ))}


              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="$1,350.00/month"
                  title="1021 E 42nd St, New York, NY"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view property",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Card 
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        margin: "0px",
                    }}
                 >
                <SuiBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="center"
                    height="100%"
                    p={3}>
                    <SuiBox color="secondary" mb={0.5}>
                    <Icon fontSize="default" sx={{ fontWeight: "bold" }} 
                    color="primary"  
                    >
                        
                    </Icon>
                    </SuiBox>
                    <SuiButton variant="contained" color="secondary" size="small" onClick={
                    () => { 
                        handleShowPropertyListView();
                        handleShowCard();  
                    } 
                    }>
                    {showCard ? "Hide Card" : "Add Card"}
                    </SuiButton>
                </SuiBox>
                </Card>
              </Grid>
            </Grid>
          </SuiBox>
          
        </Card>
        {showCard ? renderCard() : null}
      </SuiBox>
    )
    
    const AddCard = () => (
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
          <SuiButton variant="contained" color="primary" 
            onClick={() => {
                handleShowCard();
                handleShowPropertyListView();
            }
            }>
          
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
    )


   return (
    <DashboardLayout>
      <DashboardNavbar />
      { showPropertyListView ? PropertyListView() : null }
      { showCard ? AddCard() : null }
      <Footer />
    </DashboardLayout>
  );
}

export default Properties;
