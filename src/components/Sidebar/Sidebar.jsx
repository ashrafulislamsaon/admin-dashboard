import './Sidebar.css'
import {AssessmentOutlined, FeedbackOutlined, ForwardToInboxOutlined, Home,Inventory2Outlined,LocalAtmOutlined,MailOutlined,MessageOutlined,PaidOutlined,Person,SettingsOutlined,SignalCellularAlt,TrendingUp} from '@mui/icons-material';


const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebarContaner">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        <span className="sidebarListTitle">Home</span>
                    </li>
                    <li className="sidebarListItem">
                        <SignalCellularAlt className='sidebarIcon'/>
                        <span className="sidebarListTitle">Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        <span className="sidebarListTitle">Sales</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        <span className="sidebarListTitle">Users</span>
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2Outlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Products</span>
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Transactions</span>
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Reports</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Mail</span>
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Feedback</span>
                    </li>
                    <li className="sidebarListItem">
                        <MessageOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Message</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Settings</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <SettingsOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">General</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalAtmOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Payment</span>
                    </li>
                    <li className="sidebarListItem">
                        <ForwardToInboxOutlined className='sidebarIcon'/>
                        <span className="sidebarListTitle">Email</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;