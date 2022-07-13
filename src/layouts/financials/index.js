import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Markets from "assets/images/duplex.jpeg";

import RadarChart from "examples/Charts/RadarChart";
import MixedChart from "examples/Charts/MixedChart";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import typography from "assets/theme/base/typography";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function Financials() {
  const { size } = typography;
  const radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <Card mb={3} ml={5} mt={5} sx={{
                minHeight: "27.125rem",
              }} >
                <Grid container spacing={3}>
                  <SuiBox
                      ml={5}
                      mt={5}
                      width="45%"
                      sx={{
                        backgroundImage: `url(${Markets})`,
                        backgroundSize: "cover",
                        backgroundNoRepeat: "no-repeat",
                        borderRadius: "20px",
                        shawdow : "0px 0px 10px #000000",
                      }}/>

                    <Grid item xs={12} sm={6} mt={5} >
                      <SuiTypography variant="h6" gutterBottom>
                        Property Name : Holden House
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property Address : 412 Main St
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property City : New York
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property State : NY
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property Zip : 10001
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property Country : United States
                      </SuiTypography>
                      <SuiTypography variant="h6" gutterBottom>
                        Property Phone : +1 (212) 555-1212
                      </SuiTypography>
                    </Grid>
                  </Grid>
                  <SuiBox mb={0} mt={5} ml={2} mr={2}>
          <Grid container spacing={1}>
            <Grid item xs={15} sm={9} xl={4}>
              <MiniStatisticsCard
                title={{ text: "Current Tenant" }}
                count="Michael Smith"
                icon={{ color: "error", component: <AccountCircleOutlinedIcon /> }}
              />
            </Grid>
            <Grid item xs={15} sm={9} xl={4}>
              <MiniStatisticsCard
                title={{ text: "Yearly Rent" }}
                count="$2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "error", component: <PaidIcon /> }}
              />
            </Grid>
            <Grid item xs={15} sm={9} xl={4}>
              <MiniStatisticsCard
                title={{ text: "Monthly Dues" }}
                count="-$462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "error", component: <DownloadForOfflineIcon /> }}
              />
            </Grid>
           
          </Grid>
        </SuiBox>
              </Card>

            </Grid>
            <Grid item xs={12} lg={5}>
            <GradientLineChart
                title="Property Market Value"
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
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Incoming Rent" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Yearly Rent" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Monthly Dues" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Market Value" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <RadarChart
                title="Property Market Value"
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
                chart={radarChartData}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
               <MixedChart title="Property Market Value" description={
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
                chart={radarChartData}
              />
              <SuiBox mb={3} />
              <Card mb={3}sx={{
                minHeight: "15.125rem",
              }} >

              </Card>
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
          <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <OrderOverview />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Financials;
