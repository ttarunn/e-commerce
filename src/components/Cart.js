import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../utils/cartSlice'

const Cart = () => {

    const cartItems = useSelector(store => store?.cart?.item)
    const dipatch = useDispatch()
    return (
        <div className='w-full p-6 '>
            <table className='w-[75%] border'>
                <thead className='text-lg'>
                    <tr >
                        <th className='p-4'>Item</th>
                        <th>Price</th>
                        <th>Remove Item</th>
                    </tr>
                </thead>
                <tbody className='font-semibold text-center'>
                    {cartItems.map((item) => {
                        return <tr key={item.id} className='hover:cursor-pointer border'>
                        <td className='flex gap-4 justify-center items-center p-4'><span>{item.title}</span> <img src={item.image} className='w-10 h-10'/></td>
                        <td>{item.price}$</td>
                        <td onClick={()=> dipatch(removeItem(item.id))}>Remove</td>
                    </tr>
                    })}
                    {cartItems.length === 0 && <tr>
                        <td colSpan="4" className='p-4'>No item in card</td>
                        </tr>}
                    
                </tbody>
            </table>

        </div>
    )
}

export default Cart