import { DataGrid } from '@material-ui/data-grid'
import './products.scss'
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 90
    },
    {
        field: "product",
        headerName: "Product",
        width: 300,
        renderCell: (params) => {
            return (
                <div className="listItem">
                    <span>{params.row.name}</span>
                    <img 
                        src={params.row.img} 
                        alt="" 
                    />
                </div>
            );
        },
    },
    {
        field: "stock",
        headerName: "Stock",
        width: 110
    },
    {
        field: "price",
        headerName: "Price",
        width: 110
    },
    {
        field: "action",
        headerName: "Action",
        width: 110,
        renderCell: (params) => {
            return (
                <>
                    <Link to={'/product/'+params.row.id}>
                        <button className='editButton'>Edit</button>
                    </Link>
                    <DeleteOutline className='deleteIcon' /*onClick={()=> UserList.handleDelete(params.row.id)} *//>
                </>
            );
        }
    }
];

const productRows = [
    {
        id: 1,
        name: 'Apple Airpods',
        img: 'https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg',
        stock: 1400,
        price: '$240'

    },
    {
        id: 2,
        name: 'OnePlus Bullets Wireless Z2 ANC',
        img: 'https://nbmbazar.com/wp-content/uploads/2024/01/7-10.png',
        stock: 14,
        price: '$27.50'

    },
    {
        id: 3,
        name: 'Realme Buds Wireless 3',
        img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/m/a/c/-original-imagrddwvkykfwtz.jpeg?q=90&crop=false',
        stock: 12,
        price: '$20.50'

    },
    {
        id: 4,
        name: 'Boat Rockerz',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/3/294418372/LZ/CA/OO/116537440/boat-rockerz-255-pro-in-ear-bluetooth-neckband-1000x1000.jpg',
        stock: 14000,
        price: '$13.50'

    },
    {
        id: 5,
        name: 'Realme Buds T300 TWS Earbuds',
        img: 'https://m.media-amazon.com/images/I/61ZEQXGTepL._SX679_.jpg',
        stock: 15,
        price: '$25'

    },
    {
        id: 6,
        name: 'OnePlus Buds 3',
        img: 'https://m.media-amazon.com/images/I/51ggkokja+L._SX679_.jpg',
        stock: 25,
        price: '$65'

    },
    {
        id: 7,
        name: 'Redmi Buds 5 TWS',
        img: 'https://m.media-amazon.com/images/I/61la7rfN9eL._SX679_.jpg',
        stock: 50,
        price: '$35'

    },
    {
        id: 8,
        name: 'CMF by Nothing Neckband Pro',
        img: 'https://m.media-amazon.com/images/I/61VdTVvGFzL._SX679_.jpg',
        stock: 170,
        price: '$36'

    },
    {
        id: 9,
        name: 'Fastrack Fpods FZ100 TWS',
        img: 'https://m.media-amazon.com/images/I/61vA1oin15L._SX679_.jpg',
        stock: 700,
        price: '$12'

    },
    {
        id: 10,
        name: 'Amazon Basics TWS Earbuds',
        img: 'https://m.media-amazon.com/images/I/5136i2M3bPL._SY450_.jpg',
        stock: 1000,
        price: '$10'

    },
    
];

const Products = () => {
    const [data, setData] = useState(productRows);
          // example of delete row 
    const handleDelete = (id) => {
        setData(data.filter(item=> item.id !== id));
    }
  return (
    <div className='products'>
        <DataGrid 
            style={{ height: 500, width: '100%' }}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            className='data-table'
        />
    </div>
  )
}

export default Products