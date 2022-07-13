import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import PublicIcon from '@mui/icons-material/Public';


const services = [
    {
        id: 1,
        title: 'Properties',
        icon: <MapsHomeWorkOutlinedIcon  fontSize='large' color='white'/>,
        description: 'Manage properties, leases, and tenants',
    },
    {
        id: 2,
        title: 'Maintenance',
        icon: <HomeRepairServiceOutlinedIcon fontSize='large'  color='white' />,
        description: 'Manage maintenance requests',
    },
    {
        id: 3,
        title: 'Tenants',
        icon: <EmojiPeopleOutlinedIcon  fontSize='large' color='white'/>,
        description: 'Manage tenants, signatures, and payments',
    },
    {
        id: 4,
        title: 'Transactions',
        icon: <AccountBalanceOutlinedIcon  fontSize='large' color='white'/>,
        description: 'Track transactions, invoices, and payments',
    },
    {
        id: 5,
        title: 'Financials',
        icon: <DonutSmallOutlinedIcon  fontSize='large' color='white'/>,
        description: 'View reports, analytics, and financials',
    },
    {
        id: 6,
        title: 'Markets',
        icon: <PublicIcon  fontSize='large' color='white'/>,
        description: 'View markets and market data',
    }

];
export default services;
