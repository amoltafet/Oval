import { useState, useCallback, Component } from "react";
import {Line, Chart} from 'react-chartjs-2';

import Icon from "@mui/material/Icon";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Grid from "@mui/material/Grid";
import Footer from "layouts/authentication/components/Footer";
import Phone from "assets/images/landing-page/phone.png";
// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import HeroCover from "./components/HeroCover";
import ResponsiveAppBar from "./components/AppBar";

// Images
import curved9 from "assets/images/curved-images/curved1.jpg";
import { Container, Typography } from "@mui/material";
import typography from "assets/theme/base/typography";

import Access from "assets/images/landing-page/access.jpg";
import Markets from "assets/images/landing-page/markets.jpg";
import Dashboard from "assets/images/landing-page/dashboard.jpg";
import services from "./data/services";

import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';


function Home() {
  const { size } = typography;

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/dashboard', {replace: true}), [navigate]);

  return (
    <PageLayout background="white">
    <ResponsiveAppBar />
    <HeroCover
      title="Next leader in data analytics."
      description="for real estate management and data visualization"
      image={curved9}
      >
    </HeroCover>
    <SuiBox 
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "50vh",
        backgroundColor: "#0000",
      }}
    >
    <SuiBox ml={15} mt={10}>
      <Typography variant="h1" color="textPrimary">
         <BlurLinearOutlinedIcon fontSize="large"/>    Blackwater
      </Typography>
      <Typography variant="h4" color="textPrimary">
        Data Analytics for Real Estate
      </Typography>
      <Typography variant="body1" color="textPrimary" mt={5}>
        Blackwater is a data analytics platform for real estate data visualization and analysis.
        Optimized, intuitive, and easy to use, BLACKWATER is a powerful tool for real estate management.
      </Typography>
    </SuiBox>
    <Grid item xs={12} lg={7} ml={5} mr={10}>
              <GradientLineChart
                title="Assets Overview"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SuiTypography>
                    </SuiTypography>
                  </SuiBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
    </Grid>
    </SuiBox>

    <SuiBox 
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "55vh",
        backgroundColor: "#0d4066",
      }}
    >
          <SuiBox
              ml={10}
              mt={0}
              mb={0}
              mr={-45}
              width="80%"
              sx={{
                backgroundImage: `url(${Phone})`,
                backgroundSize: "cover",
                minHeight: "150px",
                transform: "skewX(0)",
              }}
           />
        <SuiBox mt={10} ml={70} mr={15}>
          <SuiTypography variant="h2" fontWeight="300" color="white" >
          <ImportantDevicesOutlinedIcon fontSize="medium" color="white" /> Tenant Portal 
          </SuiTypography>
          <SuiTypography variant="h4" fontWeight="300" color="white" mt={2}>
          Tenant payment portal and management
          </SuiTypography>
          <SuiTypography variant="h5" fontWeight="300" color="white" mt={2} mr={2} >
             The tenant payment portal is a secure and easy to use payment portal for tenants.
             Recieve payments from your tenants and manage your payment history.
             Track your tenant payments, manage fees and set reminders.
          </SuiTypography>
          <SuiBox mt={5} mb={2} >
          <SuiButton variant="contained" color="info" >
            <Link to="/tenant" style={{ textDecoration: "none" }}>
              <SuiTypography variant="h5" fontWeight="300" color="white" >
                Tenant Portal
              </SuiTypography>
            </Link>
          </SuiButton>
          </SuiBox>
          <SuiButton variant="contained" color="info">
            <Link to="/landlor" style={{ textDecoration: "none" }}>
              <SuiTypography variant="h5" fontWeight="300" color="white" >
                Landord Portal
              </SuiTypography>
            </Link>
          </SuiButton>
        </SuiBox>
    </SuiBox>
   
    
    <SuiBox mt={4} ml={10} mr={10}  
      sx={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
        <SuiBox
              ml={0}
              mt={0}
              width="50%"
              sx={{
                backgroundImage: `url(${Markets})`,
                backgroundSize: "cover",
                backgroundNoRepeat: "no-repeat",
                transform: "skewX(0)",
                borderRadius: "20px",
                shawdow : "0px 0px 10px #000000",

              }}
           />
        <SuiBox mt={15} ml={25}>
          <SuiBox variant="outlined">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <SuiBox 
                sx = {{
                    borderRadius: "20px",
                    backgroundColor: '#0d4066',
                    boxShadow: "0px 0px 2px #000000",
                    padding: "15px",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "200px",
                }}
                >
                  {_.icon}
                  <SuiTypography variant="h3" fontWeight="" color="white" mt={2}>
                    {_.title}
                  </SuiTypography>
                  <SuiTypography variant="body1" fontWeight="" color="white" >
                    {_.description}
                  </SuiTypography>

                </SuiBox>
              </Grid>
            ))}
          </Grid>
          </SuiBox>
        </SuiBox>

    </SuiBox>

    <SuiBox mt={0} mb={2}
      sx={{
        minHeight: "45vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#0d4066',
        boxShadow: "0px 0px 2px #000000",
        padding: "15px",
      }}
    > <SuiBox mt={10} ml={15}>
          <SuiTypography variant="h2" fontWeight="300" color="white" >
          <CandlestickChartOutlinedIcon fontSize="medium" color="white" /> Market Data and Analytics 
          </SuiTypography>
          <SuiTypography variant="h4" fontWeight="200" color="white" mt={2} mr={150}>
              Market Data and Analytics allows you to track your market data and analytics.
              Track your market data and analytics, manage fees and set reminders.
          </SuiTypography>
          
        </SuiBox>
    </SuiBox>
      <SuiBox
              mt={-63}
              ml={120}
              width="30%"
              sx={{
                backgroundImage: `url(${Dashboard})`,
                backgroundSize: "cover",
                minHeight: "150px",
                transform: "skewX(0)",
                borderRadius: "20px",
                shawdow : "0px 0px 10px #000000",
                minHeight: "55vh",
                border : "10px solid #0d4066",

              }}/>
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        >
        <SuiBox component="img" src={Markets} alt="rocket" width="10%"/>
        <SuiBox component="img" src={Markets} alt="rocket" width="10%" ml={15}/>
        <SuiBox component="img" src={Markets} alt="rocket" width="10%" ml={15}/>
        </Grid>

      <SuiBox mt={0}>
        <Footer />
      </SuiBox>
    </PageLayout>
  );
}
const data = [];
const data2 = [];
const labels = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({x: i, y: prev});
    prev2 += 5 - Math.random() * 10;
    data2.push({x: i, y: prev2});
    labels.push("");
}
  

class MyChart extends Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            animations: {
              tension: {
                  duration: 1200,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
              }
          },
            title: {
              display: false,
              fontSize: 20,
            },
            legend: {
              display: false,
            },
            scales: {
              xAxes: {
                  display: false,
                  gridLines: {
                      display: false,
                  }
              },
              yAxes: {
                  display: false,
                  gridLines: {
                      display: false,
                  },
              },
          }
          }}
        />
      </div>
    );
  }
            
     
}
const state = {
  labels: labels,
  datasets: [{
    borderColor: "red",
    borderWidth: 1,
    radius: 0,
    data: data,
  },
  {
    borderColor: "blue",
    borderWidth: 1,
    radius: 0,
    data: data2,
  }]
}


export default Home;
