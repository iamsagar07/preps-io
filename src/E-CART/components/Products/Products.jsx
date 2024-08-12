import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetProducts, } from '../../../store/action';
import { Link } from 'react-router-dom';
import CustomHooks from '../../../components/Toastify/customHooks';


const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.myFirstReducer.products)
    useEffect(() => {
        dispatch(GetProducts())
    }, [])

    const { handleNotification, triggerNotifications } = CustomHooks("top-left");

    const handleAddToCart = (e) => {
        const { id, title, price, image, description } = e
        const body = {
            id: id,
            title: title,
            price: price,
            image: image,
            description: description
        }
        dispatch(AddToCart(body));
        triggerNotifications({
            type: "success",
            message: "Added to cart Succesfully",
            duration: 2000,
        })
    }

    return (
        <div>
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 p-2 ">
                {
                    products.map((item) => (
                        <div key={item.id} className='flex flex-col gap-3 p-2 border rounded'>
                            <img src={item.image} alt='images-item' />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className='flex items-center gap-5 justify-around'>
                                <b>{item.price}</b>
                                <i>{item.rating.rate}</i>
                            </div>

                            <button onClick={() => handleAddToCart(item)} className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900">
                                Add To Cart
                            </button>
                            {handleNotification}{" "}

                            <Link to={'/cart'}>
                                <button className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900">
                                    View Cart
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
            {handleNotification}{" "}
        </div>
    )
}

export default Products
