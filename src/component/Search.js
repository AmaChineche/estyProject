'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading';

const Search = () => {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false)
  // function Update(e){
  //     setResult[e.target.value]
  //     console.log(result);
  //     setLoading(true)
  
  useEffect(() => {
    if (query.length === 0) {
      setResult([])
      return;
    }

    async function fetchDate() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.tyicode.com/todos');
      const data = await response.json();
      setResult(data)
      setLoading(false)

    }
    fetchDate()
  }, [query])

  function Update(e) {
    setQuery(e.target.value)
  }
  return (

    <div>

      <input className='rounded-full relative z-10 p-2' placeholder="Search..." type='search' name='search' id='search' onChange={Update} value={query} />

      {Loading && <Loading />}
      {/* <h1>{result}</h1> */}
      <ul>
          {result.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default Search
