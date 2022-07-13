/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Properties from "layouts/properties";
import Maintenance from "layouts/maintenance";
import Tenants from "layouts/tables";
import Transactions from "layouts/billing";
import Financials from "layouts/financials";
import Home from "layouts/home";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import DeleteIcon from '@mui/icons-material/Delete';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';

import PublicIcon from '@mui/icons-material/Public';
import Markets from "layouts/markets";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardOutlinedIcon />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Properties",
    key: "properties",
    route: "/properties",
    icon: <MapsHomeWorkOutlinedIcon />,
    component: <Properties />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Maintenance",
    key: "maintenance",
    route: "/maintenance",
    icon: <HomeRepairServiceOutlinedIcon />,
    component: <Maintenance />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tenants",
    key: "tenants",
    route: "/tenants",
    icon: <EmojiPeopleOutlinedIcon />,
    component: <Tenants />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    route: "/transactions",
    icon: <AccountBalanceOutlinedIcon />,
    component: <Transactions />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Financials",
    key: "financials",
    route: "/financials",
    icon: <DonutSmallOutlinedIcon />,
    component: <Financials />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Home",
    key: "home",
    route: "/",
    icon: <DeleteIcon />,
    component: <Home />,
    noCollapse: true,
  },
  
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon:<AccountCircleOutlinedIcon />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <DeleteIcon />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
