// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import HomeNavbar from "./DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";
import MobilePayment from "assets/images/landing-page/mobile-payments.jpg";
import Finance from "assets/images/landing-page/finance.webp";
import Data from "assets/images/landing-page/data.webp";
import Dash from "assets/images/landing-page/dash.jpeg";

import Laptop from "assets/images/landing-page/laptop.png";


import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import SuiButton from "components/SuiButton";

function HeroCover({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout background="white">
      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <SuiBox mt={top}>
            <SuiBox pt={10} px={3}>
              {!header ? (
                <>
                  <SuiBox mb={3}>
                    <SuiTypography variant="h2" fontWeight="" color={color} >
                      {title}
                    </SuiTypography>
                  </SuiBox>
                  <SuiTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </SuiTypography>
                  <SuiBox mt={5}>
                  <SuiBox mt={0} >
                        <SuiButton color="info" size="large"
                            startIcon={<AccountCircleOutlinedIcon />}
                            onClick={() => {
                                window.location.href = "/Oval/authentication/sign-in";
                            }}>
                            Tenant Portal
                        </SuiButton>
                    </SuiBox>
                    <SuiBox mt={2}>
                    <SuiButton color="info" size="large" 
                        startIcon={<DashboardOutlinedIcon />}
                        onClick={() => {
                            window.location.href = "/Oval/authentication/sign-up";
                        }
                    }>
                    
                            Get Started
                         </SuiButton>
                    </SuiBox>
                    <SuiBox mt={2} >
                        <SuiButton color="light" size="large"
                            startIcon={<DonutSmallOutlinedIcon />}
                            onClick={() => {
                                window.location.href = "/Oval/authentication/sign-in";
                            }}>
                            Login
                        </SuiButton>
                    </SuiBox>
                    </SuiBox>
                    
                </>
              ) : (
                header
              )}
            </SuiBox>
            <SuiBox p={3}>{children}</SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <SuiBox
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-12rem", xl: "-16rem" }}
            mr={-16}
            sx={{
              transform: "skewX(-10deg)",
              overflow: "hidden",
              borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
            }}
          >
            <SuiBox
              ml={-8}
              height="100%"
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: "skewX(10deg)",
              }}
            />
             
          </SuiBox>
          <SuiBox
              ml={-12}
              mt={-85}
              height="100%"
              sx={{
                backgroundImage: `url(${Laptop})`,
                backgroundSize: "cover",
                transform: "skewX(0)",
              }}
            />
        </Grid>
       
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        >
        <SuiBox component="img" src={Finance} alt="rocket" width="10%"/>
        <SuiBox component="img" src={Data} alt="rocket" width="10%" ml={15}/>
        <SuiBox component="img" src={Dash} alt="rocket" width="10%" ml={15}/>
        </Grid>

        <SuiBox mt={5}>


        </SuiBox>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
HeroCover.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
HeroCover.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default HeroCover;
