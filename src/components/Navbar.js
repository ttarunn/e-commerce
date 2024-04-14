import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

const Navbar = () => {        
    // const navigate = useNavigate();
    const cartItems = useSelector(store => store?.cart?.item)
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        
      }, 
      {
        name: "Cart " + cartItems?.length,
        slug: "/cart",
        
    }
    
    ]

    useEffect(()=> {
      console.log(cartItems)
    }, [])
  
    return (
      <header className='py-3 shadow w-full'>
          <nav className='flex justify-between w-full items-center'>
            <Link to={'/'} className='mr-4 mt-1 px-6 py-2 cursor-pointer font-bold text-xl'>
              My Store
            </Link>
            <Search />
            <ul className='flex'>
            {navItems.map((item) => {
                return <li key={item.slug}>
                <Link 
                to={item.slug}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-medium hover:text-black'
                >
                  {item.name}
                </Link>
            </li>
            })}
              
            </ul>
          </nav>
        
      </header>
    )
  }

export default Navbar