import React from 'react'
import { useNavigate } from 'react-router-dom';


function FindTest() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/do');
  }

  return (
    <div className='row m-0 justify-content-center'>
      <div className='col-12'>
        <input type='text' className=''></input>
      </div>
      <div className='col-12'>
        <button onClick={handleClick}>FIND</button>
      </div>
    </div>
  )
}

export default FindTest