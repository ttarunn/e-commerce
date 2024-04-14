import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Main = () => {

    const data = useSelector(store => store?.search?.data)

  return (
    <div className='w-full flex gap-4 flex-wrap p-6'>
        {data.map((item, idx)=> {
            return <Card key={idx} item={item}/>
        })}
    </div>
  )
}

export default Main