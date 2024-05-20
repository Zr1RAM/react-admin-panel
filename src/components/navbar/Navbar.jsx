import { useContext } from "react"
import "./navbar.scss"
import { DarkModeContext } from "../../context/darkModeContext"
import { NotificationsNone, Language, Settings, Brightness4, Brightness7 } from "@material-ui/icons"

const Navbar = () => {
    const { darkMode, toggle } = useContext(DarkModeContext);

    const logoColorStyle = {
        color: darkMode ? 'darkcyan' : 'darkblue',
    }

  return (
    <div className="navbar">
        <div className="navbar-wrapper">
            <div className="navleft">
                <span className="logo" style={logoColorStyle}>Admin Panel</span>
            </div>
            <div className="navright">
                <div className="navbar-icons" onClick={toggle}>
                    {darkMode ? <Brightness4/> : <Brightness7 />}
                </div>
                <div className="navbar-icons">
                    <NotificationsNone />
                    <span className="navIconBadge">2</span>
                </div>
                <div className="navbar-icons">
                    <Language />
                </div>
                <div className="navbar-icons">
                    <Settings />
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFN1Tvo80rYwu-eXsDNNzsuPITOdtyRPlYIsIqKaIbw&s" alt="" className="avatar" />
            </div>
        </div>
    </div>
  )
}

export default Navbar