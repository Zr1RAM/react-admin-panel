import { Link, useLocation } from 'react-router-dom';
import './user.scss'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';

const User = () => {
    const userId = useLocation().pathname.split("/")[2];

  return (
    <div className='user'>
        {/* {userId} */}
        <div className="title-container">
            <h1>Edit User</h1>
            <Link to="/newUser">
                <button>Create</button>
            </Link>
        </div>
        <div className="user-container">
            <div className="userShow">
                <div className="userTop">
                    <img 
                        src="https://qph.cf2.quoracdn.net/main-qimg-bb6f8e2baf93e9e5136cce5d5edf39ab-pjlq" 
                        alt="" 
                    />
                    <div className="userTitle">
                        <span className='name'>Ana Bray</span>
                        <span className='title'>Research Scientist</span>
                    </div>
                </div>
                <div className="userBottom">
                    <span className="bottomTitle">Account Details</span>
                    <div className="userIconTitle">
                        <CalendarToday className='userIcon'/>
                        <span className="infoTitle">anabray69</span>
                    </div>
                    <div className="userIconTitle">
                        <CalendarToday className='userIcon'/>
                        <span className="infoTitle">16.05.2105</span>
                    </div>
                    <span className="bottomTitle">Contact Details</span>
                    <div className="userIconTitle">
                        <PhoneAndroid className='userIcon'/>
                        <span className="infoTitle">+7 727 788 46</span>
                    </div>
                    <div className="userIconTitle">
                        <MailOutline className='userIcon'/>
                        <span className="infoTitle">ana.bray@braytech.mars.com</span>
                    </div>
                    <div className="userIconTitle">
                        <LocationSearching className='userIcon'/>
                        <span className="infoTitle address">
                            BrayTech Futurescape Valles Marineris Outpost,
                            Olympus Mons Sector, Mars Colony 3,
                            Mars - 42597-3
                        </span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span>Edit</span>
                <form action="" className="updateForm">
                    <div className="updateLeft">
                        <div className="updateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='anabray69'
                                className=''
                            />
                        </div>
                        <div className="updateItem">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder='Ana Bray'
                                className=''
                            />
                        </div>
                        <div className="updateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder='ana.bray@braytech.mars.com'
                                className=''
                            />
                        </div>
                        <div className="updateItem">
                            <label>Phone</label>
                            <input 
                                type="text" 
                                placeholder='+7 727 788 46'
                                className=''
                            />
                        </div>
                        <div className="updateItem">
                            <label htmlFor='address'>Address</label>
                            {/* <input
                                //id='address' 
                                type="text" 
                                placeholder='BrayTech Futurescape Valles Marineris Outpost,
                                Olympus Mons Sector, Mars Colony 3,
                                Mars - 42597-3'
                                className=''
                            /> */}
                            <textarea
                                id='address' 
                                name='address'
                                rows='3'
                                cols='38' 
                                placeholder='BrayTech Futurescape Valles Marineris Outpost, Olympus Mons Sector, Mars Colony 3, Mars - 42597-3'
                                className='address'
                            />
                        </div>
                    </div>
                    <div className="updateRight">
                        <div className="imageUpload">
                            <img 
                                src="https://qph.cf2.quoracdn.net/main-qimg-bb6f8e2baf93e9e5136cce5d5edf39ab-pjlq" 
                                alt="" 
                            />
                            <label htmlFor="file"><Publish className='updateIcon'/></label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User