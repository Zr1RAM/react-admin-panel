import { useContext, useState } from 'react'
import './newProduct.scss'
import storage from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { MoviesContext } from '../../context/movieContext/MovieContext';
import { addMovie } from '../../context/movieContext/apiCalls';

const NewProduct = () => {

    const { dispatch } = useContext(MoviesContext)

    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgThumbnail, setImgThumbnail] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [movie, setMovie] = useState({
        title: "",
        desc: "",
        year: "",
        ageLimit: "",
        isSeries: "false",
        genre: "",
        trailer: "",
        img: "",
        video: "",
        imgTitle: "",
        imgThumbnail: ""
    });

    const [uploaded, setUploaded] = useState(0);

    const handleFileChange = (event, setStateCallback) => {
        // console.log("check");
        const file = event.target.files[0];
        if(file) {
            setStateCallback(file);
            // console.log(file);
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setStateCallback(reader.result);
            // }
            // reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        // setIsSeries(e.target.value === 'yes');
        setMovie({...movie, [e.target.name]: e.target.value })
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(movie);
        addMovie(movie, dispatch);
    };

    const upload = (items) => {
        items.forEach((item) => {
            console.log(item);
            const storageRef = ref(storage, `/content/${item.label}/${item.file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on(
                'state_changes',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("upload progress: " + progress + "%");
                },
                (error) => {
                    console.error('Upload failed:', error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setMovie((prev) => {
                        return {...prev, [item.label]: downloadURL};
                    });
                    setUploaded((prev) => prev + 1);
                }
            );
            // const uploadTask = storage.ref(`/content/${item.label}/${item.file.name}`).put(item);
            // uploadTask.on("state_changes", 
            // (snapshot) => {
            //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //     console.log("upload progress: " + progress + "%");
            // },
            // (err) => {console.log(err)},
            // () => {
            //     uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            //         setMovie((prev) => {
            //             return {...prev, [item.label]: url};
            //         });
            //         setUploaded((prev) => prev + 1);
            //     })
            // });
        });
    };

    // console.log(movie);

    const handleUpload = (e) => {
        e.preventDefault();
        console.log(img);
        console.log(imgTitle);
        console.log(imgThumbnail);
        console.log(trailer);
        console.log(video);
        upload([
            { file: img, label: "img"},
            { file: imgTitle, label: "imgTitle"},
            { file: imgThumbnail, label: "imgThumbnail"},
            { file: trailer, label: "trailer", name: trailer.name },
            { file: video, label: "video", name: video.name },
        ]);
    };

  return (
    <div className='newProduct'>
        <h1>{movie.isSeries === 'true' ? 'New Series' : 'New Movie'}</h1>
        <form>
            <div className="formLeft">
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="isSeries" id='isSeries' /* value={isSeries === 'true' ? 'true' : 'false'} */ onChange={handleChange}>
                        <option value="false">Movie</option>
                        <option value="true">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>{movie.isSeries === 'true' ? 'Series Name' : 'Movie Name'}</label>
                    <input type="text" placeholder={movie.isSeries === 'true' ? 'Series title' : 'Movie title'} name="title" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <textarea 
                        rows='3'
                        cols='30' 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum"
                        style = {{resize: "none"}}
                        name='desc'
                        onChange={handleChange}
                    />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="1970" name='year' onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
                </div>
                {/* <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="5h" />
                </div> */}
                <div className="addProductItem">
                    <label>Age Limit</label>
                    <input type="text" placeholder="18+" name='ageLimit' onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input 
                        type="file" 
                        name='trailer'
                        onChange={(event) => handleFileChange(event, setTrailer)}
                    />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input 
                        type="file" 
                        name='video'
                        onChange={(event) => handleFileChange(event, setVideo)}
                    />
                </div>
            </div>
            <div className="formRight">
                <div className="addProductImage">
                    <label>Image</label>
                    <img src={img || "https://visualpharm.com/assets/657/Add%20Image-595b40b65ba036ed117d36ee.svg"} alt="" />
                    <label 
                        htmlFor='img' 
                        className='chooseImgLabel'
                    >
                        <input 
                            type="file" 
                            id='img' 
                            style={{display: "none"}}
                            onChange={(event) => handleFileChange(event, setImg)}
                            name='img'
                        />
                        Add Image
                    </label>
                </div>
                <div className="addProductImage">
                    <label>Title Image</label>
                    <img src={imgTitle || "https://visualpharm.com/assets/657/Add%20Image-595b40b65ba036ed117d36ee.svg"} alt="" />
                    <label 
                        htmlFor='imgTitle' 
                        className='chooseImgLabel'
                    >
                        <input 
                            type="file" 
                            id='imgTitle' 
                            style={{display: "none"}}
                            onChange={(event) => handleFileChange(event, setImgTitle)}
                            name='imgTitle'
                        />
                        Add Title Image
                    </label>
                </div>
                <div className="addProductImage">
                    <label>Thumbnail Image</label>
                    <img src={imgThumbnail || "https://visualpharm.com/assets/657/Add%20Image-595b40b65ba036ed117d36ee.svg"} alt="" />
                    <label 
                        htmlFor='imgThumbnail' 
                        className='chooseImgLabel'
                    >
                        <input 
                            type="file" 
                            id='imgThumbnail' 
                            style={{display: "none"}}
                            onChange={(event) => handleFileChange(event, setImgThumbnail)}
                            name='imgThumbnail'
                        />
                        Add Thumbnail Image
                    </label>
                </div>
            </div>
        </form>
        {uploaded === 5 ? (
            <button onClick={handleCreate}>Create</button>
        ) : (
            <button onClick={handleUpload}>Upload</button>
        )}
    </div>
  )
}

export default NewProduct