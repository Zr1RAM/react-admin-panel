import './newUser.scss'

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1>New User</h1>
        <form className='userForm'>
            <div className="userItem">
                <label>Username</label>
                <input type="text" placeholder='john.smith420' />
            </div>
            <div className="userItem">
                <label>Full Name</label>
                <input type="text" placeholder='John Smith' />
            </div>
            <div className="userItem">
                <label>Email</label>
                <input type="email" placeholder='john@gmail.com' />
            </div>
            <div className="userItem">
                <label>Password</label>
                <input type="password" placeholder='john123@!' />
            </div>
            <div className="userItem">
                <label>Phone</label>
                <input type="tel" placeholder='+91 9876543210' /*pattern=""*/ />
            </div>
            <div className="userItem">
                <label htmlFor='address'>Address</label>
                <textarea
                    id='address' 
                    name='address'
                    rows='3'
                    cols='50' 
                    placeholder='37, Nyniappa Maistry St, Park Town, Chennai - 600003, Tamil Nadu'
                />
            </div>
            <div className="userItem">
                <label>Gender</label>
                <div className="userGender">
                    <input type="radio" name='gender' id='male' value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className="userItem">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default NewUser