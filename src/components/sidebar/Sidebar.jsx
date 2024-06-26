import { Link } from 'react-router-dom'
import './sidebar.scss'
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    Report, 
    WorkOutline, 
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline
} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="title">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to="/" className='link'>
                        <li className="item">
                            <LineStyle className='sidebarIcon'/>
                            Home  
                        </li>
                    </Link>
                    <li className="item">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="item">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="title">Quick Menu</h3>
                <ul className="sidebarlist">
                    <Link to="/users" className='link'>
                        <li className="item">
                            <PermIdentity className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className="item">
                            <Storefront className='sidebarIcon'/>
                            Products
                        </li>   
                    </Link>
                    <li className="item">
                        <AttachMoney className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="item">
                        <BarChart className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="title">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="item">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="item">
                        <DynamicFeed className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="item">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="title">Staff</h3>
                <ul className="sidebarlist">
                    <li className="item">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="item">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="item">
                        <Report className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar