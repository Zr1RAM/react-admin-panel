import { VisibilityOutlined } from "@material-ui/icons"
import "./widgetSm.scss"

const WidgetSm = ({title}) => {
  return (
    <div className="widgetSm">
        <span className="title">{title}</span>
        <ul className="list">
            <li className="listItem">
                <img src="https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp" alt="" />
                <div className="user">
                    <span className="username">Anna Lim</span>
                    <span className="userTitle">Software Engineer</span>
                </div>
                <button><VisibilityOutlined className="icon"/>Display</button>
            </li>
            <li className="listItem">
                <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/PROFILE-PICTURE-FOR-FACEBOOK.jpg" alt="" />
                <div className="user">
                    <span className="username">Benedict Zimbabwe</span>
                    <span className="userTitle">Librarian</span>
                </div>
                <button><VisibilityOutlined className="icon"/>Display</button>
            </li>
            <li className="listItem">
                <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="" />
                <div className="user">
                    <span className="username">Tom Spencer</span>
                    <span className="userTitle">Privileged White man</span>
                </div>
                <button><VisibilityOutlined className="icon"/>Display</button>
            </li>
            <li className="listItem">
                <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg" alt="" />
                <div className="user">
                    <span className="username">Laura Burgerman</span>
                    <span className="userTitle">HR Manager</span>
                </div>
                <button><VisibilityOutlined className="icon"/>Display</button>
            </li>
            <li className="listItem">
                <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" />
                <div className="user">
                    <span className="username">Ramesh Venkataraman</span>
                    <span className="userTitle">Obligatory Brown Hire</span>
                </div>
                <button><VisibilityOutlined className="icon"/>Display</button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm