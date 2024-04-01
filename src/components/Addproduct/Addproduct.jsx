import React, { useState } from 'react'
import "./Addproduct.css"
import upload_area from "../../assets/upload_area.svg"

const Addproduct = () => {

    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const add_product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append("product", image)

        await fetch("http://localhost:4000/upload", {
            method: "POST",
            headers: {
                Accept: "application/json",
            }, body: formData,
        }).then((resp) => resp.json()).then((data) => responseData = data)
        if (responseData.success) {
            product.image = responseData.image_url
            console.log(product);
            await fetch("http://localhost:4000/addproduct", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product added") : alert("failed plese try again")
            })
        }
    }

    return (
        <div className='addproduct'>
            <div className="add_product_item_field">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add_product_price">
                <div className="add_product_item_field">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="add_product_item_field">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="add_product_item_field">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add_product_selector'>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="kid">kid</option>
                </select>
            </div>
            <div className="add_product_item_field">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct_upload_img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={() => { add_product() }} className='add_product_btn'>Add</button>
        </div>
    )
}

export default Addproduct
