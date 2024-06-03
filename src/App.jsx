import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import "../style.scss";
import Sidebar from "./components/sidebar/Sidebar";
import './app.scss';
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import Lists from "./pages/lists/Lists";
import NewList from "./pages/newList/NewList";
import ListInfo from "./pages/listInfo/ListInfo";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext)
  const userAccess = user !== null && user?.accessToken !== null;
  // console.log(userAccess);
  return (
    <Router>
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        {userAccess && <Navbar />}
        <div className="container">
          {userAccess && <Sidebar />}
          <div className="page">
            <Routes>
              <Route path="/login" element={userAccess ? <Navigate to="/" /> : <Login/>} />
              {userAccess ?
                <>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/users" element={<UserList/>} />
                  <Route path="/user/:userId" element={<User/>} />
                  <Route path="/newUser" element={<NewUser/>} />
                  <Route path="/products" element={<Products/>} />
                  <Route path="/lists" element={<Lists/>} />
                  <Route path="/lists/:listId" element={<ListInfo/>} />
                  <Route path="/newList" element={<NewList/>} />
                  <Route path="/product/:productId" element={<Product/>} />
                  <Route path="/newProduct" element={<NewProduct/>} />
                </> : <Route path="*" element={<Navigate to="/login" />} />
              }
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
