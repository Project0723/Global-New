import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
        <img className='my-1' src={loading} alt="loading" />
      
    </div>
  )
}
export default Spinner


// This colde help to load reload circle below each page before loading the page . 