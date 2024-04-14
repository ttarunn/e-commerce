import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'

const Card = ({item}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(store => store?.cart?.item)
    function handleOnclick(item){
        if(!cartItems.some((i) => i.id === item.id )){
            dispatch(addItem(item))
        }else{
            dispatch(removeItem(item.id))
        }
    }
  return (
    <div className='w-72 border p-4 flex flex-col justify-center items-center gap-6 rounded-md shadow-md'>
        <img src={item?.image} className='w-40 h-40'/>
        <h2 className='text-lg font-bold'>{item?.title}</h2>
        <div className='flex justify-between w-full text-sm font-semibold'>
            <p>Price: {item?.price}$</p>
            <p>Rating: {item?.rating?.rate}⭐</p>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleOnclick(item)}>
        {
            cartItems.some((i) => i.id === item.id ) ? 'Remove from cart' : 'Add to cart'
        }
        </button>
    </div>
  )
}

export default Card