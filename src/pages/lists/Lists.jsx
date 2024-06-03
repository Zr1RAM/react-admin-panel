import { DataGrid } from '@material-ui/data-grid'
import '../products/products.scss'
import { useContext, useEffect } from 'react'
import { deleteList, getLists } from '../../context/listContext/apiCalls';
import { ListContext } from '../../context/listContext/ListContext';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Lists = () => {

    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        deleteList(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 190 },
        {
            field: "title",
            headerName: "List",
            width: 250,
            // renderCell: (params) => {
            //     return (
            //         <div className="listItem">
            //             <span>{params.row.title}</span>
            //             <img 
            //                 src={params.row.img} 
            //                 alt="" 
            //             />
            //         </div>
            //     );
            // },
        },
        {
            field: "type",
            headerName: "Type",
            width: 105,
            // renderCell: (params) => {
            //     return (
            //         <span>{params.row.isSeries ? "Series" : "Movie"}</span>
            //     );
            // },
        },
        { 
            field: "genre", 
            headerName: "Genre", 
            width: 150 ,
            // renderCell: (params) => {
            //     return (<span className='genre'>{params.row.genre}</span>);
            // }
        },
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
                        <Link to={'/lists/'+ params.row._id} state={{ list: params.row }}>
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
            rows={lists}
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

export default Lists