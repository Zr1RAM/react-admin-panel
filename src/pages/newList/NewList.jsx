import { useContext, useEffect, useState } from 'react'
import '../newProduct/newProduct.scss'
import './newList.scss'
import { ListContext } from '../../context/listContext/ListContext'
import { MoviesContext } from '../../context/movieContext/MovieContext'
import { createList } from '../../context/listContext/apiCalls'
import { getMovies } from '../../context/movieContext/apiCalls'

const NewList = () => {
    const [list, setList] = useState({
        title: "movies",
        type: "",
        genre: "",
        content: []
    })

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: movieDispatch } = useContext(MoviesContext);

    const handleChange = (e) => {
        setList({...list, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(list);
        createList(list, dispatch);
    };

    useEffect(()=> {
        getMovies(movieDispatch);
    }, [movieDispatch])

  return (
    <div className='newProduct'>
         <h1>New List</h1>
        <form>
            <div className="formLeft">
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="type" id='type' /* value={isSeries === 'true' ? 'true' : 'false'} */ onChange={handleChange}>
                        <option value="movies">Movies</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>List Title</label>
                    <input type="text" placeholder="List title" name="title" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
                </div>
            </div>
            <div className="formRight">
                {/* What he suggested which I will try to modify and make my own  */}
                <div className="addListItem">
                    <label>Content</label>
                    <select multiple name="content" id="content" onChange={(e) =>{
                        let selectedMovies = Array.from(e.target.selectedOptions, (option) => option.value);
                        console.log(selectedMovies);
                        setList({...list, content: selectedMovies});
                        
                    }}>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>{movie.title}</option>
                        ))}
                    </select>
                </div>
            </div>
        </form>
        <button onClick={handleSubmit}>Create</button>
    </div>
  )
}

export default NewList