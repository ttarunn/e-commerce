import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(store => store?.cart?.item)

    return (
        <div className='w-full p-6'>
            <table className='w-[75%]'>
                <thead className='text-lg'>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className='font-semibold text-center'>
                    {cartItems.map((item) => {
                        return <tr key={item.id} className='p-4'>
                        <td>{item.title}</td>
                        <td>{item.price}$</td>
                        <td>{item.price}$</td>
                    </tr>
                    })}
                    
                </tbody>
            </table>

        </div>
    )
}

export default Cart