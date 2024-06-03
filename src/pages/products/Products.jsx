import { DataGrid } from '@material-ui/data-grid'
import './products.scss'
import { useContext, useEffect, useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

const Products = () => {
    // const [data, setData] = useState(productRows);
    const {movies, dispatch} = useContext(MoviesContext);
          // example of delete row 
    const handleDelete = (id) => {
        // setData(data.filter(item=> item.id !== id));
        deleteMovie(id, dispatch);
    }

    useEffect(() => {
        getMovies(dispatch);
    }, []);

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "title",
            headerName: "Movie",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="listItem">
                        <span>{params.row.title}</span>
                        <img 
                            src={params.row.img} 
                            alt="" 
                        />
                    </div>
                );
            },
        },
        {
            field: "type",
            headerName: "Type",
            width: 105,
            renderCell: (params) => {
                return (
                    <span>{params.row.isSeries ? "Series" : "Movie"}</span>
                );
            },
        },
        { 
            field: "genre", 
            headerName: "Genre", 
            width: 150 ,
            renderCell: (params) => {
                return (<span className='genre'>{params.row.genre}</span>);
            }
        },
        { field: "year", headerName: "Year", width: 105 },
        // { field: "limit", headerName: "Limit", width: 110 },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                // const logClick = () => {
                //     console.log(params.row);
                // };
                return (
                    <>
                        <Link to={'/product/'+ params.row._id} state={{ movie: params.row }}>
                            <button className='editButton' /* onClick={logClick} */>Edit</button>
                        </Link>
                        <DeleteOutline className='deleteIcon' onClick={()=> handleDelete(params.row._id)}/>
                    </>
                );
            }
        }
    ];

  return (
    <div className='products'>
        <DataGrid 
            style={{ height: 500, width: '100%' }}
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
            className='data-table'
        />
    </div>
  )
}

export default Products