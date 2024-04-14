import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchResults } from '../utils/searchSlice';


const Search = () => {

    const [showSearchSuggestion, setshowSearchSuggestion] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(searchResults(searchText))
    }, [searchText])
  return (
    <div className='w-[70%] flex justify-center'>
        <input
          type="text"
          className={`border w-[50%] sm:w-[full] rounded-full p-2 sm:px-4 bg-transparent`}
          placeholder="🔍Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setshowSearchSuggestion(true)}
          onBlur={() => setshowSearchSuggestion(false)}
        />
    </div>
  )
}

export default Search