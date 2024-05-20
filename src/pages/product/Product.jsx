import { Link, useLocation } from 'react-router-dom';
import './product.scss'
import Chart from '../../components/charts/chart/Chart';
import { Publish } from '@material-ui/icons';

const productData = [
    {
        name: "Jan",
        "Sales": 4000,
    },
    {
        name: "Feb",
        "Sales": 2000,
    },
    {
        name: "Man",
        "Sales": 6500,
    },
];

const dataKeys = [
    {
        dataKeyName: "Sales",
        stroke: "teal"
    },
];

const axis = {
    x: {
        dataKey: "name",
        stroke: "#5550bd"
    },
    y: {
        domain: [0,10000],
        stroke: "#5550bd"
    }
  };

const Product = () => {
    const productId = useLocation().pathname.split("/")[2];

  return (
    <div className='product'>
        <div className="titleContainer">
            <h1>Product</h1>
            <Link to="/newProduct">
                <button>Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="topLeft">
                <Chart title="Product Performance" data={productData} dataKeys={dataKeys} axis={axis}/>
            </div>
            <div className="topRight">
                <div className="productInfoTop">
                    <img src="https://nbmbazar.com/wp-content/uploads/2024/01/7-10.png" alt="" />
                    <span>OnePlus Bullets Wireless Z2 ANC</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="infoKey">ID:</span>
                        <span className="infoValue">2</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Sales:</span>
                        <span className="infoValue">20000</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Active:</span>
                        <span className="infoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">In Stock:</span>
                        <span className="infoValue">Yes</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form>
                <div className="formLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='OnePlus Bullets Wireless Z2 ANC' />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="formRight">
                    <div className="productUpload">
                        <img 
                            src="https://nbmbazar.com/wp-content/uploads/2024/01/7-10.png" 
                            alt="" 
                        />
                        <label htmlFor="file">
                            <Publish />
                        </label>
                        <input type="file" id='file' style={{display: 'none'}}/>
                    </div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product