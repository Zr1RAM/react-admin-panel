import { DataGrid } from '@material-ui/data-grid'
import './userList.scss'
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
    // { 
    //     field: 'firstName', 
    //     headerName: 'First name', 
    //     width: 150 
    // },
    { 
        field: 'user', 
        headerName: 'User', 
        width: 150,
        renderCell: (params) => {
            return (
                <div className="userItem">
                    <img src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            );
        }
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 115,
        renderCell: (params) => {
            return (<span className={`${params.row.status}`}>{params.row.status}</span>);
        }
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link to={'/user/'+params.row.id}>
                        <button className='editButton'>Edit</button>
                    </Link>
                    <DeleteOutline className='deleteIcon' /*onClick={()=> UserList.handleDelete(params.row.delete)} *//>
                </>
            );
        }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];
  
  const rows = [
    {
        id: 1, 
        username: 'Jon Snow', 
        avatar: 'https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png', 
        age: 35,
        status: 'Active'
    },
    { 
        id: 2, 
        username: 'Cercei Lannister', 
        avatar: 'https://pbs.twimg.com/media/CCkU1loWYAAiDXp.jpg', 
        age: 42,
        status: 'Deactivated' 
    },
    { 
        id: 3, 
        username: 'Jaime Lannister', 
        avatar: 'https://tse3.mm.bing.net/th?id=OIP.uo5oeKBVqCAXxhCtsUXFPAHaE7&pid=15.1', 
        age: 45,
        status: 'Pending'
    },
    {
        id: 4, 
        username: 'Arya Stark', 
        avatar: 'https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/04/game-of-thrones-arya-stark.png?fit=618%2C412&ssl=1', 
        age: 16,
        status: 'Active'
    },
    { 
        id: 5, 
        username: 'Daenerys Targaryen', 
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/861727259420425849/A7FFCCA87D7FA7D386D56B02DA97EC23FCDE1F8C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', 
        age: 37,
        status: 'Pending'
    },
    { 
        id: 6, 
        username: 'Melisandre', 
        avatar: 'https://watchersonthewall.com/wp-content/uploads/2018/12/Melisandre.jpg', 
        age: 150,
        status: 'Deactivated'
    },
    { 
        id: 7, 
        username: 'Ferrera Clifford', 
        avatar: 'https://qph.cf2.quoracdn.net/main-qimg-7a9c4a82e65166a294924ab041c074f7-lq', 
        age: 34,
        status: 'Active'
    },
    { 
        id: 8, 
        username: 'Rossini Frances', 
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Composer_Rossini_G_1865_by_Carjat_-_Restoration.jpg/640px-Composer_Rossini_G_1865_by_Carjat_-_Restoration.jpg', 
        age: 36,
        status: 'Active' 
    },
    { 
        id: 9, 
        username: 'Harvey Roxie', 
        avatar: 'https://cdn.britannica.com/55/232055-050-674CE27E/Harvey-Keitel-2008.jpg', 
        age: 65,
        status: 'Active' 
    },
  ];



const UserList = () => {

    const [data, setData] = useState(rows);

      // example of delete row 
const handleDelete = (id) => {
    setData(data.filter(item=> item.id !== id));
}

  return (
    <div className='userList'>
        <DataGrid 
            style={{ height: 500, width: '100%' }}
            rows={data}
            columns={columns}
            checkboxSelection
            // pageSizeOptions={5} //[5,10] previously this was the option i put
            pageSize={8}
            className='data-table'
            disableSelectionOnClick
            // sx={{
            //     '& .MuiDataGrid-checkboxInput': {
            //       border: 'rgb(245, 245, 245)', // Customize the checkbox color
            //     },
            //     '& .MuiDataGrid-checkboxInput.Mui-checked': {
            //       border: 'rgb(245, 245, 245)', // Customize the checked checkbox color
            //     },
            //   }}
        />
    </div>
  )
}

export default UserList

// For more details, checkout Data Table / DataGrid from https://mui.com/material-ui/react-table/#table