import { VisibilityOutlined } from "@material-ui/icons"
import "./widgetSm.scss"
import { useGetRequest } from "../../../customHooks/getRequest";

const WidgetSm = ({title}) => {
    const { response: newUsers , loading} = useGetRequest("/users?new=true");
  return (
    <div className="widgetSm">
        <span className="title">{title}</span>
        <ul className="list scrollBehavior">
            {loading ? <span>Loading...</span>
                : newUsers.map((user) =>{
                    return (
                        <li className="listItem" key={user._id}>
                            <img 
                                src= {user.profilePic || "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp"}
                                alt="" 
                            />
                            <div className="user">
                                <span className="username">{user.username}</span>
                                {/* <span className="userTitle">Software Engineer</span> */}
                            </div>
                            <button><VisibilityOutlined className="icon"/>Display</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default WidgetSm