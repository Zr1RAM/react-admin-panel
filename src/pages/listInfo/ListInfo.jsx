import '../product/product.scss'
import { Link, useLocation } from 'react-router-dom';

const ListInfo = () => {
    const location = useLocation();
    const list = location.state?.list;
    console.log(list);

    const handleChange = (e) => {
        
    };

    const handleUpdate = (e) => {
        e.preventDefault();
    }

  return (
    <div className="product">
        <div className="titleContainer">
            <h1>Movie Details</h1>
            <Link to="/newList">
                <button>Create</button>
            </Link>
        </div>
        <div className="productTop">
            {/* <div className="topLeft">
                <Chart title="Product Performance" data={productData} dataKeys={dataKeys} axis={axis}/>
            </div> */}
            <div className="topRight">
                <div className="productInfoTop">
                    {/* <img src={list?.img} alt="" /> */}
                    <span>{list?.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="infoKey">ID:</span>
                        <span className="infoValue">{list?._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Type:</span>
                        <span className="infoValue">{list?.type}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Genre:</span>
                        <span className="infoValue">{list?.genre}</span>
                    </div>
                    {/* <div className="productInfoItem">
                        <span className="infoKey">Year:</span>
                        <span className="infoValue">{movie?.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Age Limit:</span>
                        <span className="infoValue">{movie?.ageLimit}</span>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="bottomContainer">
            <div className="productBottom">
                <form>
                    <div className="formLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={list?.title} />
                        <label>Type</label>
                        <select name="type" id='type' onChange={handleChange}>
                            <option value="movies">Movies</option>
                            <option value="series">Series</option>
                        </select>
                        <label>Genre</label>
                        <input type="text" placeholder={list?.genre} />
                        {/* <label>Age Limit</label>
                        <input type="text" placeholder={movie?.ageLimit} /> */}
                        {/* <label>Trailer</label>
                        <input type="file" /> */}
                        {/* <textarea
                            name='trailer'
                            rows='2'
                            cols='30' 
                            placeholder={movie?.trailer}
                        /> */}
                        {/* <label>Video</label>
                        <input type="file" /> */}
                    </div>
                    <div className="formRight">
                        {/* <div className="productUpload">
                            <img 
                                src={list?.img} 
                                alt="" 
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div> */}
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
            {/* <div className="trailer">
                <VideoPlayer video={movie?.trailer}/>
            </div> */}
        </div>
    </div>
  )
}

export default ListInfo