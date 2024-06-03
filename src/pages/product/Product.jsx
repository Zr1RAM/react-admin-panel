import { Link, useLocation } from 'react-router-dom';
import './product.scss'
import { Publish } from '@material-ui/icons';
import YouTube from 'react-youtube';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';

const Product = () => {
    const location = useLocation();
    const movie = location.state?.movie;
    console.log(movie);
    //const productId = location.pathname.split("/")[2];
    // console.log(productId);
    // console.log(movie.trailer);
    const handleUpdate = (e) => {
        e.preventDefault();
    }

  return (
    <div className='product'>
        <div className="titleContainer">
            <h1>Movie Details</h1>
            <Link to="/newProduct">
                <button>Create</button>
            </Link>
        </div>
        <div className="productTop">
            {/* <div className="topLeft">
                <Chart title="Product Performance" data={productData} dataKeys={dataKeys} axis={axis}/>
            </div> */}
            <div className="topRight">
                <div className="productInfoTop">
                    <img src={movie?.img} alt="" />
                    <span>{movie.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="infoKey">ID:</span>
                        <span className="infoValue">{movie?._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Type:</span>
                        <span className="infoValue">{movie?.isSeries ? 'Series' : 'Movie'}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Genre:</span>
                        <span className="infoValue">{movie?.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Year:</span>
                        <span className="infoValue">{movie?.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="infoKey">Age Limit:</span>
                        <span className="infoValue">{movie?.ageLimit}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomContainer">
            <div className="productBottom">
                <form>
                    <div className="formLeft">
                        <label>{movie?.isSeries ? 'Series' : 'Movie'} Title</label>
                        <input type="text" placeholder={movie?.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie?.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie?.genre} />
                        <label>Age Limit</label>
                        <input type="text" placeholder={movie?.ageLimit} />
                        <label>Trailer</label>
                        <input type="file" />
                        {/* <textarea
                            name='trailer'
                            rows='2'
                            cols='30' 
                            placeholder={movie?.trailer}
                        /> */}
                        <label>Video</label>
                        <input type="file" />
                    </div>
                    <div className="formRight">
                        <div className="productUpload">
                            <img 
                                src={movie?.img} 
                                alt="" 
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
            <div className="trailer">
                <VideoPlayer video={movie?.trailer}/>
            </div>
        </div>
    </div>
  )
}

export default Product