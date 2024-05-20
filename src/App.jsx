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
  //Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Router>
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="page">
            <Routes>
              <Route
                exact 
                path="/"
                element={
                  <Home/>
                }
              />
              <Route 
                path="/users"
                element={
                  <UserList/>
                }
              />
              <Route 
                path="/user/:userId"
                element={
                  <User/>
                }
              />
              <Route 
                path="/newUser"
                element={
                  <NewUser/>
                }
              />
              <Route 
                path="/products"
                element={
                  <Products/>
                }
              />
              <Route 
                path="/product/:productId"
                element={
                  <Product/>
                }
              />
              <Route 
                path="/newProduct"
                element={
                  <NewProduct/>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
