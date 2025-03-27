import React from 'react'

const Footers = () => {
    const Setdate=new Date();
  return (
    <div className='text-center flex items-center justify-center'>copywrite &copy; {Setdate.getFullYear()} </div>
  )
}

export default Footers