import { useState } from 'react'
import './newProduct.scss'

const NewProduct = () => {
    const [previewimg, setPreviewImg] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImg(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

  return (
    <div className='newProduct'>
        <h1>New Product</h1>
        <form>
            <div className="formLeft">
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='Apple Airpods' />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder='123' />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <div className="formRight">
                <div className="addProductImage">
                    <label>Image</label>
                    {previewimg && <img src={previewimg} alt="" /> }
                    <label 
                        htmlFor='file' 
                        className='chooseImgLabel'
                    >
                        <input 
                            type="file" 
                            id='file' 
                            style={{display: "none"}}
                            onChange={handleFileChange}
                        />
                        Choose Image
                    </label>
                </div>
            </div>
        </form>
        <button>Create</button>
    </div>
  )
}

export default NewProduct